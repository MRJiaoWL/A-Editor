import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { JiaosComponent } from './jiaos/jiaos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JiaoListComponent } from './jiao-list/jiao-list.component';
import { JiaoDetailComponent } from './jiao-detail/jiao-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'jiaos', component: JiaosComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'JiaoList', component: JiaoListComponent},
  {path: 'detail/:id', component: JiaoDetailComponent}
]

@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
