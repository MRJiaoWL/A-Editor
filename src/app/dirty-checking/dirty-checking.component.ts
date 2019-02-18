import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css']
})
export class DirtyCheckingComponent {
  constructor(

    private router: Router,
    public element: ElementRef
  ) { }

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  back(name,age,power){
    if(name.dirty ===false && age.dirty ===false && power.dirty ===false){
      debugger;
      this.router.navigate(['dashboard']);
    } 
    else(
      alert('已做出更改，是否保存')
    )
  }
}
