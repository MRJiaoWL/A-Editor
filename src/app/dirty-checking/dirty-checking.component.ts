import { Component,  Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dirty-checking',
  templateUrl: './dirty-checking.component.html',
  styleUrls: ['./dirty-checking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirtyCheckingComponent implements DoCheck {

  @Input() user: any;
  index = 0;


  constructor() { }

  ngDoCheck() {
    this.index++;
    console.log('view被执行', this.index);
  }
}
