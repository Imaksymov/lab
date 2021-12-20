import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { User1Service } from '../services/user1.service';
import { User2Service } from '../services/user2.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  userList:IUser[]=[];

  userList1:IUser[]=[];

  userList2:IUser[]=[];

  selectedUser?:IUser;
  constructor(private service: UserService, private service1: User1Service, private service2: User2Service) { }

  ngOnInit(): void {
    this.updateUsers();
    this.updateUsers1();
    this.updateUsers2();
  }
  updateUsers(){
    this.service.getUser().subscribe(
      (users)=>{
        this.userList=users;
        console.log(this.userList)
      }
    );
    
    }
  updateUsers1(){
    this.service1.getUser().subscribe(
      (user1)=>{
         this.userList1=user1;
        console.log(this.userList1)
      }
    );
    }
  updateUsers2(){
    this.service2.getUser().subscribe(
      (user2)=>{
          this.userList2=user2;
        console.log(this.userList2)
      }
    );
    }   
}
