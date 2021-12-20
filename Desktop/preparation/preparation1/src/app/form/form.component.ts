import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userList:IUser[]=[];
  selectedUser?:IUser;
  constructor(private service: FormService) { }

  ngOnInit(): void {
    this.updateUsers();

  }
  updateUsers(){
    this.service.getUser().subscribe(
      (form)=>{
        this.userList=form;
      }
    );
    }
  addUser(user:IUser){
    this.service.postUser(user).subscribe(
      (form)=>{

        this.updateUsers();
      }
    );
  }
}
