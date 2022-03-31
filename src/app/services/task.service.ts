import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

    getTasks(){
      return this.httpClient.get<ITask[]>('http://localhost:3000');
    }
  
}
