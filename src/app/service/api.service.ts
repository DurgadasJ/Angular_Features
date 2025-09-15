import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPosts(){
    console.log('get post called');
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getAdd(a: number, b:number){
     return a+b;
  }
}
