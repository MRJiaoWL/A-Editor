import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css']
})
export class DirtyCheckingComponent {
  constructor(

    private router: Router,
  ) { }

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', power: this.powers[0]};
  back(name,power){
    if(name.dirty ===false && power.dirty ===false){
/*       debugger; */
      this.router.navigate(['dashboard']);
    } 
    else(
      alert('dirty')
    )
  }
}
