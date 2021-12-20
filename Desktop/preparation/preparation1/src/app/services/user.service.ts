import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://localhost:3000/users"

  constructor(private http:HttpClient) { }

  getUser():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }

  postUser(user:IUser):Observable<IUser[]>{
    return this.http.post<IUser[]>(this.url,user);
  }
}