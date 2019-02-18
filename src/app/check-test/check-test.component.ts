import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-test',
  templateUrl: './check-test.component.html',
  styleUrls: ['./check-test.component.css']
})
export class CheckTestComponent implements OnInit {

  favoriteColorControl = new FormControl('红色');
  favoriteColor = '红色';
  constructor() { }

  ngOnInit() {
  }

}
