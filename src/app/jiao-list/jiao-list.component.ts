import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { JiaoService } from '../jiao.service';
import { jiao } from '../jiaos/jiao';

@Component({
  selector: 'app-jiao-list',
  templateUrl: './jiao-list.component.html',
  styleUrls: ['./jiao-list.component.css']
})
export class JiaoListComponent implements OnInit {
  jiaolist: Hero[];
  getHeroes(): void {
    this.jiaoService.getHeroes()
        .subscribe(jiaolist => this.jiaolist = jiaolist);
  }

  constructor(private jiaoService: JiaoService) { }

  ngOnInit() {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.jiaoService.addJIao({ name } as jiao)
      .subscribe(jiao => {
        this.jiaolist.push(jiao);
      } )
  }
  delete(jiao: jiao): void {
    this.jiaolist = this.jiaolist.filter(h => h !==jiao);
    this.jiaoService.delJiao(jiao).subscribe();
  }

}
