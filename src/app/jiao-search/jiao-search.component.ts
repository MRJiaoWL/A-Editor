import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { jiao } from '../jiaos/jiao';
import { JiaoService } from '../jiao.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-jiao-search',
  templateUrl: './jiao-search.component.html',
  styleUrls: ['./jiao-search.component.css']
})
export class JiaoSearchComponent implements OnInit {
  heroes$: Observable<jiao[]>;
  private searchTerms = new Subject<string>();
  constructor(private jiaoService: JiaoService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.jiaoService.serchHeroes(term))
    )
  }

}
