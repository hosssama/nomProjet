import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  { path : 'cv', component: FirstComponent},
  { path : 'todo', component: TodoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
