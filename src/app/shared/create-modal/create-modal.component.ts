import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskWithID } from 'src/app/core/models/task-with-id';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.sass']
})
export class CreateModalComponent implements OnInit {
  form: FormGroup
  loading: boolean = false
  succesModal: boolean = false
  alertform: boolean = false
  errorMSG: string | boolean = false

  constructor(
    private fb:FormBuilder, 
    private authService: AuthService,
    private taskService: TaskService
  ) {
    this.form = fb.group({})
   }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      task: ["",Validators.compose([
        Validators.required
      ])],
      description: [""],
    })
    return form
   }
  createFunction(){

    if(this.form.valid){
      this.loading = true
      if(navigator.onLine){
        const newTask: Task = {
          uid: this.authService.getUserData().uid,
          task: this.form.value.task,
          status: false,
          description: this.form.value.description
        }
        this.taskService.createTask(newTask)
        .then( (response) => {
          this.loading=false
          this.succesModal = true
        })
        .catch(error =>{
          this.errorMSG="Un error inesperado nos impide crear la tarea. Intenta de nuevo más tarde"
          this.loading = false
          this.alertform = true
        })
      }else{
        this.errorMSG="No pudimos conectarnos para crear la tarea. Revisa tu conexión a internet"
        this.loading = false
        this.alertform = true
      }
    }else{
      this.errorMSG="No se pudo crear la tarea. Revise el formulario"
      this.alertform = true
      this.loading = false
    }
  }

  restartModal(){
    this.loading = false
    this.succesModal = false
    this.alertform = false
    this.errorMSG = false
    this.form = this.createForm()
  }
}
