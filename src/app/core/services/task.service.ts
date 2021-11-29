import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TaskWithID } from '../models/task-with-id';
import { Task } from '../models/task';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // errors: any {

  // }
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) { }
  createTask(task: Task){
    // return new Promise<Task>((resolve,reject) =>
    // {
    //   this.afs.collection("tasks").add(task)
    //   .then(res => {
    //   }, err => reject(err))
    // }
    // )
    return this.afs.collection("tasks").add(task)
  }

  getTasks() {
    return this.afs.collection('tasks', ref => ref.where('uid', '==', this.authService.getUserData().uid)).snapshotChanges()
  }

  toggleStatus(task: TaskWithID){
    const newStatus = task.task.status? false : true
    return this.afs.collection("tasks").doc(task.id).set({status: newStatus},{merge:true})
  }

  deleteTask(id:string){
    return this.afs.collection("tasks").doc(id).delete()
  }
  updateTask(task: any){
    return this.afs.collection("tasks").doc(task.id).set({task: task.task.task, description: task.task.description},{merge:true})
  }
}
