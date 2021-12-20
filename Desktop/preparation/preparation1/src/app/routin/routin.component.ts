import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-routin',
  templateUrl: './routin.component.html',
  styleUrls: ['./routin.component.css']
})
export class RoutinComponent implements OnInit {
  userList:IUser[]=[];
  selectedUser?:IUser;
  constructor(private service: FormService) { }

  ngOnInit(): void {this.updateUsers();
  }
  updateUsers(){
    this.service.getUser().subscribe(
      (form)=>{
        this.userList=form;
      }
    );
    }
}
