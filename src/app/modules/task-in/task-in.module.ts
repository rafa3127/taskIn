import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskInRoutingModule } from './task-in-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { TaskInComponent } from './task-in.component';


@NgModule({
  declarations: [
    AddButtonComponent,
    TaskInComponent
  ],
  imports: [
    CommonModule,
    TaskInRoutingModule,
    SharedModule
  ]
})
export class TaskInModule { }
