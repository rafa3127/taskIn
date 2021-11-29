import { Component, EventEmitter, Input, OnInit, } from '@angular/core';
import { faLess } from '@fortawesome/free-brands-svg-icons';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.sass']
})
export class DeleteModalComponent implements OnInit {
  @Input() taskID: string = ""
  loading: boolean = false
  errorMSG: string | boolean = false
  succesModal: boolean = false
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {}


  deleteFunction(){
    this.loading = true
    if(navigator.onLine){
      this.taskService.deleteTask(this.taskID)
      .then(response =>{
        this.loading = false
        this.succesModal = true
      })
      .catch(error =>{
        this.loading = false
        this.errorMSG= "No pudimos conectarnos para eliminar la tarea. Revisa tu conexión"
      })
    }else{
      this.loading = false
      this.errorMSG= "No pudimos conectarnos para eliminar la tarea. Revisa tu conexión"
    }
  }

  resetModal(){
    this.loading = false
    this.errorMSG = false
    this.succesModal = false
  }

}
