import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskWithID } from 'src/app/core/models/task-with-id';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskWithID = {id:"",task:{uid: "", status: false, task:"",description:""}}
  @Output() emitterTask: EventEmitter<TaskWithID> = new EventEmitter<TaskWithID>()

  icon:any 
  loadingStatus: boolean = false

  constructor(
    private taskService: TaskService,
  ) { }
  
  ngOnInit(): void {
    this.icon = this.task.task.status? ["far","check-circle"] : ["far","circle"]
  }

  toggleStatus(task: TaskWithID){
    this.loadingStatus = true
    this.taskService.toggleStatus(task).then(() => this.loadingStatus = false)
  }

  delete(){
    this.emitterTask.emit(this.task)
  }

  update(){
    this.emitterTask.emit(this.task)
  }
  

}
