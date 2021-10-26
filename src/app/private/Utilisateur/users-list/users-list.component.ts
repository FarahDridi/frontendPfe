import { Component, OnInit, ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @ViewChild('viewModal')modal:any;
  isUpdate:boolean = false;
  public users: any [] = [];
  user:any;
  userDelete;
  usersList:any[]=[];
  dialog: any;
  isPopupOpened: boolean;

  constructor(private userService:UserService, private router: Router,private http: HttpClient,private route: ActivatedRoute) { }
  loadUserList(){
    this.userService.getAllUsers().subscribe(
      result => {
        console.log(result);
        this.usersList = result;
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.loadUserList()
  }

  deleteRow(event) {
    this.userDelete = event;
  } 

  delete(){
    let index = this.usersList.indexOf(this.userDelete);
    this.usersList.splice(index,1);
    this.userService.deleteUser(this.userDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

 
  
  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.usersList=[];
      this.usersList = this.users.filter((ct) => { 
        return ct.prenom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.usersList=[];
      this.usersList=this.users;
    }
    
  }


  onViewClick(user){
    this.isUpdate=true;
    this.user = JSON.parse(JSON.stringify(user)); 
    let idUser = this.route.snapshot.params.id;
  console.log(idUser);
  this.userService.getOneUser(idUser).subscribe(
    res => {
      console.log(res['user']);
      let user = res['user'];

      this.user = user;

    },
    err => {
      console.log(err);
    }
  )
}




}
