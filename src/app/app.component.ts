import { Component } from '@angular/core';


class User {
  _age = 25;
  _name = 'vincent';

  getAge() {
    console.log('执行获取age');
    return this._age;
  }

  getName() {
    console.log('执行获取name');
    return this._name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  index = 0;

  user = new User;
  change() {
  }

  ngDoCheck() {
    this.index++;
    console.log('app被执行', this.index);
  }
}
