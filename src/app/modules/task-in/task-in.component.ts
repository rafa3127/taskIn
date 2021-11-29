import { Component, OnInit } from '@angular/core';
import { TaskWithID } from 'src/app/core/models/task-with-id';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-in',
  templateUrl: './task-in.component.html',
  styleUrls: ['./task-in.component.sass']
})
export class TaskInComponent implements OnInit {
  taskList: Array<TaskWithID> = []
  loading: boolean = false
  errorMSG: string = ""
  constructor(
    public taskService : TaskService
  ) { }

  ngOnInit(): void {
    this.loading = true
    if(navigator.onLine){
      this.taskService.getTasks()
      .subscribe( resolve => {
        const tasks = resolve.map((doc: any): TaskWithID => {
          const {uid,status,task,description} = doc.payload.doc.data()
          const id = doc.payload.doc.id
          
          return {
            task: {
              uid: uid ? uid.toString() : "", 
              status: status? status.toString() : "", 
              task: task? task.toString(): "", 
              description: description? description.toString(): ""},
              id: id
            }
          })
          this.taskList = tasks
          this.loading = false
        }, error =>{
        this.loading = false
        this.errorMSG = "Un error inesperado no nos permite mostrar las tareas. Intente de nuevo más tarde"
      })
    }else{
      this.loading = false
      this.errorMSG = "TaskIn no se puede conectar a internet. Comprueba tu conexión"
    }
  }

}
