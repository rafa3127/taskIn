import { Component, Input, OnInit } from '@angular/core';
import { TaskWithID } from 'src/app/core/models/task-with-id';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  @Input() taskList: Array<TaskWithID> = []
  @Input() loading: boolean = false
  @Input() errorMSG: string | boolean = false

  taskToAction: TaskWithID = {id:"",task:{uid: "", status: false, task:"",description:""}}

  constructor() { 
  }

  ngOnInit(): void {
  }

  actionTask(task: TaskWithID | any){
    this.taskToAction = task
  }

}
