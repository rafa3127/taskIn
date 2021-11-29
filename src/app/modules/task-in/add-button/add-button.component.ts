import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }


}
