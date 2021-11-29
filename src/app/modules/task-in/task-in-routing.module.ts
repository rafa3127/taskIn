import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskInComponent } from './task-in.component';

const routes: Routes = [
  {path: "", component: TaskInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskInRoutingModule { }
