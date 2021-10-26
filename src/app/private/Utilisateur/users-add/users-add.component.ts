import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService} from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  public usersForm:FormGroup;
  public usersAddForm:FormGroup;
  entreprise:string;
  
  constructor(builder: FormBuilder, private userService: UserService, private router:Router) {
    let usersAddControls={
      nom:new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),
      prenom:new FormControl("" ,[
        Validators.required,
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email]),
      password:new FormControl("",[Validators.required]),
      num:new FormControl("",[Validators.required]),
      target:new FormControl("",[Validators.required])
      
    }
    let usersControls={
      ent:new FormControl("",[Validators.required])
    }
    this.usersForm = builder.group(usersControls)
    this.usersAddForm = builder.group(usersAddControls)
  }

  get nom() { return this.usersAddForm.get('nom') }
  get prenom() { return this.usersAddForm.get('prenom') }
  get email() { return this.usersAddForm.get('email') }
  get password(){return this.usersAddForm.get('password')}
  get num(){return this.usersAddForm.get('num')}
  get target(){return this.usersAddForm.get('target')}
  get ent(){return this.usersForm.get('ent')}

  ngOnInit(): void {
  }
  User() {
    
  let data = this.usersAddForm.value;
  let user = new User (data.nom, data.prenom, data.email, data.password, data.num, data.target, this.entreprise,data.role,data._id,data.mobile,data.site,data.matricule,data.devise,data.adresse,data.ville,data.code_postal,data.pays)
  //alert(JSON.stringify(data))
  console.log(user);
  this.userService.addUser(user).subscribe(
    res => {
      
      this.router.navigate(['/users/list']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  )
 
  }
  UserPop() {
    
    console.log(this.usersForm.value);
    this.entreprise=this.usersForm.value.ent;
    document.getElementById("closeModalButton").click();
   
   
    }
  

}


 