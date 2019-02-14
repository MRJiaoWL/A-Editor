import { Component, OnInit } from '@angular/core';
import { jiao } from './jiao';
import { JiaoService} from '../jiao.service';

@Component({
  selector: 'app-jiaos',
  templateUrl: './jiaos.component.html',
  styleUrls: ['./jiaos.component.css']
})
export class JiaosComponent implements OnInit {
  jiao : jiao[];
  getHeroes(): void {
    this.jiaoService.getHeroes()
        .subscribe(jiao => this.jiao = jiao);
  }


  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.jiaoService.addJIao({ name } as jiao)
      .subscribe(jiao => {
        this.jiao.push(jiao);
      } )
  }
  constructor(private jiaoService: JiaoService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
