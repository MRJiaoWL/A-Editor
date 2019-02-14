import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const jiaolists = [
      { id: 11, name: '闪电侠' },
      { id: 12, name: '奥特曼' },
      { id: 13, name: '孙悟空' },
      { id: 14, name: '蜘蛛侠' },
      { id: 15, name: '铁蛋火车侠' },
      { id: 16, name: '毒液' },
      { id: 17, name: '海王' },
      { id: 18, name: '路飞' },
      { id: 19, name: '索罗' },
      { id: 20, name: '张全蛋' }
    ];
    return {jiaolists};
  }
  genId(jiaolists: Hero[]): number {
    return jiaolists.length > 0 ? Math.max(...jiaolists.map(hero => hero.id)) + 1 : 11;
  }
}
