import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { JiaoService } from '../jiao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jiaos: Hero[]=[];

  constructor(private jiaoService: JiaoService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.jiaoService.getHeroes()
    .subscribe(jiaos => this.jiaos = jiaos.slice(1, 5));

  }

}
