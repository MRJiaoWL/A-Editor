import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent{
  values = '';
  name: string;
  weapons: string;
  skills: string;
  addContd: forContent;
  isEdit = false;
  forContents = [
    {
      forName: '孙悟空',
      forWeapons: '如意金箍棒',
      forSkills: '72变',
    },
    {
      forName: '猪八戒',
      forWeapons: '九齿钉耙',
      forSkills: '36变',
    },
    {
      forName: '孙悟空',
      forWeapons: '如意金箍棒',
      forSkills: '72变',
    },
    {
      forName: '猪八戒',
      forWeapons: '九齿钉耙',
      forSkills: '36变',
    }
  ];

  constructor(
) {
}

  ngOnInit() {
  }
  addCClick() {
    this.isEdit = !this.isEdit;
  }
  addClick() {
    this.addContd = {
      forName: this.name,
      forWeapons: this.weapons,
      forSkills:  this.skills,
    };
    this.forContents.push( this.addContd);
    this.name = '';
    this.weapons = '';
    this.skills = '';
  }
  delClick(item) {
    for (let i = 0; i < this.forContents.length; i++) {
      if (this.forContents[i] === item) {
        this.forContents.splice(i, 1);
      }
    }
   /*  this.presentConfirm('警告', 'error').present(); */
    alert('删除一条数据');
  }
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
// tslint:disable-next-line:class-name
interface forContent {
  forName: string;
  forWeapons: string;
  forSkills: string;
}
