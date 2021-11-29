import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskWithID } from 'src/app/core/models/task-with-id';
import { TaskService } from 'src/app/core/services/task.service';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.sass']
})
export class EditModalComponent implements OnInit {
  @Input() task: TaskWithID = {id:"",task:{uid: "", status: false, task:"",description:""}}
  form: FormGroup
  alertform: boolean = false
  loading: boolean = false
  errorMSG: string | boolean = false
  succesModal: boolean = false

  constructor(
    private fb:FormBuilder, 
    private taskService: TaskService
  ) {
    this.form = fb.group({})
   }

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges){
    this.form = this.createForm(changes['task'].currentValue)
  }

  createForm(task: TaskWithID):FormGroup{
    var form:any = this.fb.group({
      task: [task.task.task,Validators.compose([
        Validators.required
      ])],
      description: [task.task.description],
    })
    return form
   }
  updateFunction(){

    if(this.form.valid){
      if(navigator.onLine){
        const newTask: TaskWithID = this.task
        newTask.task.task = this.form.value.task
        newTask.task.description = this.form.value.description
        this.taskService.updateTask(newTask)
        .then( (response) => {
          this.loading=false
          this.succesModal = true
        })
        .catch(error =>{
          this.errorMSG="Un error inesperado nos impide editar la tarea. Intenta de nuevo más tarde"
          this.loading = false
          this.alertform = true
        })
      }else{
        this.errorMSG="No pudimos conectarnos para editar la tarea. Revisa tu conexión a internet"
        this.loading = false
        this.alertform = true
      }
    }else{
      this.errorMSG="No se pudo editar la tarea. Revise el formulario"
      this.alertform = true
      this.loading = false
    }

  }

  restartModal(){
    this.loading = false
    this.succesModal = false
    this.alertform = false
    this.errorMSG = false
  }


}
