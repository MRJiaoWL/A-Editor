import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { jiaolists } from './jiao-list/jiaolists';
import { catchError, map, tap } from 'rxjs/operators';
import { jiao } from './jiaos/jiao';
/* import { Hero } from './hero';
import { jiaolists } from './jiao-list/jiaolists';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JiaoService {
  constructor(private http: HttpClient,private messageService: MessageService){}
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
  private jiaoUrl = 'api/jiaolists';
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.jiaoUrl)
    .pipe(
      tap(_ =>this.log('英雄人物')),
      catchError(this.handleError('gerHeroes',[]))
    )
  }
  getHero(id: number): Observable<Hero>{
    const url =  `${this.jiaoUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }
  private handleError<T> (operation = 'operation', result?:T){
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
  updateHero (jiao: Hero): Observable<any> {
    return this.http.put(this.jiaoUrl, jiao, httpOptions).pipe(
      tap(_ => this.log(`更新成功 id=${jiao.id}`))
    )
  }
  addJIao (jiao: jiao): Observable<jiao> {
    return this.http.post<jiao>(this.jiaoUrl,jiao,httpOptions).pipe(
      tap((newJiao: jiao) => this.log(`添加一个英雄 id=${newJiao.id}`)),
      catchError(this.handleError<jiao>('addJiao'))
    );
  }
  delJiao (jiao: jiao | number): Observable<jiao> {
    const id = typeof jiao === 'number' ? jiao : jiao.id;
    const url =  `${this.jiaoUrl}/${id}`;
    return this.http.delete<jiao>(url, httpOptions).pipe(
      tap(_ => this.log(`删除一个英雄 id=${id}`)),
      catchError(this.handleError<jiao>('deleteHero'))
    )
  }

  serchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<jiao[]>(`${this.jiaoUrl}/?name=${term}`).pipe(
      tap(_ =>this.log(`找到匹配英雄 "${term}"`)),
      catchError(this.handleError<jiao[]>('serchHeroes',[]))
    )
  }
/*   constructor(private messageService: MessageService) { }
  getHero(id: number):Observable< Hero> {
    this.messageService.add(`来啦！老弟！你的ID是=${id}!`);
    return of (jiaolists.find(jiao => jiao.id == id));
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('来啦！老弟!');
    return of(jiaolists);
  } */
}
