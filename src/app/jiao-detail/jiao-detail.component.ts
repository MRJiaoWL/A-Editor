import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { JiaoService } from '../jiao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jiao-detail',
  templateUrl: './jiao-detail.component.html',
  styleUrls: ['./jiao-detail.component.css']
})
export class JiaoDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private jiaoService: JiaoService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.jiaoService.getHero(id)
    .subscribe(jiao => this.hero = jiao)

  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.jiaoService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
