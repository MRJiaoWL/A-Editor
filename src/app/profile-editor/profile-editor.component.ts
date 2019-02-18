import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent{

  hero = {name: ''};
/*   Reset(){
  constructor() { }

  ngOnInit() {
  }*/
ok(name){
console.log(name.dirty)

}
}
