import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class User1Service {

  url:string="http://localhost:3000/user1"

  constructor(private http:HttpClient) { }

  getUser():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }

  
}
