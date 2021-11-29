import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { SectionLoadingSpinnerComponent } from './section-loading-spinner/section-loading-spinner.component';
import { SuccesActionModalComponent } from './succes-action-modal/succes-action-modal.component';




@NgModule({
  declarations: [
    LogoComponent,
    AuthFormComponent,
    NavBarComponent,
    TaskComponent,
    TaskListComponent,
    DeleteModalComponent,
    EditModalComponent,
    CreateModalComponent,
    SectionLoadingSpinnerComponent,
    SuccesActionModalComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LogoComponent,
    AuthFormComponent,
    NavBarComponent,
    TaskComponent,
    TaskListComponent,
    DeleteModalComponent,
    EditModalComponent,
    CreateModalComponent,
    SectionLoadingSpinnerComponent,
    SuccesActionModalComponent,
  ]
})
export class SharedModule { }
