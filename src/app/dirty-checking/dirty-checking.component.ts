import { Component,  Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirtyCheckingComponent implements DoCheck {

  index = 0;
  name = '焦威禄';
  age = '12';
  oldage = this.age;
  oldname = this.name;
  hobbies = ['无不同'];


  constructor() { }

  ngDoCheck() {
    if(this.name !==this.oldname){
      this.hobbies.push(`检查出不同，原来的内容是"${this.oldname}",现在的内容是"${this.name}"`)
    }
    if(this.age !==this.oldage){
      this.hobbies.push(`检查出不同，原来的内容是"${this.oldage}",现在的内容是"${this.age}"`)
    }
  }
}
