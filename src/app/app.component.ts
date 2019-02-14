import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public element: ElementRef
  ){}
  title = 'Tour of Heroes';
  change() {
    this.router.navigate(['dirtyChecking']);
  }
}
