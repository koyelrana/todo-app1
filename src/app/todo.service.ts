import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class TodoService {

  constructor( private http:Http) { }
  getTodos(){
    return this.http.get("http://localhost:8080/Todos")
        .map(res => res.json());
  }
   addTodo(info){
    return this.http.post("http://localhost:8080/Todos",info)
        .map(res => res.json());
  }
  getTodo(id){
    return this.http.get("http://localhost:8080/Todos/"+id)
        .map(res => res.json());
  }
  deleteTodo(id){
    return this.http.delete("http://localhost:8080/Todos/"+id)
        //.map(res => res.json());
  }
  updateTodo(id, info){
    return this.http.put("http://localhost:8080/Todos/"+id,info)
        .map(res => res.json());
  }
}