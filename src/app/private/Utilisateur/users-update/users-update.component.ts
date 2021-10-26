import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { ActivatedRoute} from '@angular/router';
import { User } from 'src/app/components/user';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  public usersForm:FormGroup;
  public usersUpdateForm:FormGroup;
  entreprise:string;
  
  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private userService:UserService) {
    let usersUpdateControls={
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
      target:new FormControl("",[Validators.required]),
      _id: new FormControl("", [Validators.required])
      
    }
    let usersControls={
      ent:new FormControl("",[Validators.required])
    }
    this.usersForm = builder.group(usersControls)
    this.usersUpdateForm = builder.group(usersUpdateControls)
  }

  get nom() { return this.usersUpdateForm.get('nom') }
  get prenom() { return this.usersUpdateForm.get('prenom') }
  get email() { return this.usersUpdateForm.get('email') }
  get password(){return this.usersUpdateForm.get('password')}
  get num(){return this.usersUpdateForm.get('num')}
  get target(){return this.usersUpdateForm.get('target')}
  get ent(){return this.usersForm.get('ent')}
  get _id(){return this.usersUpdateForm.get('_id')}

  ngOnInit(): void {
    let idUser =this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getOneUser(idUser).subscribe(
      res => {
        console.log(res);
        let user=res;
        this.usersUpdateForm.patchValue({
          nom:user.nom,
          prenom:user.prenom,
          email:user.email,
          password:user.password,
          num:user.num,
          target:user.target,
          ent:user.ent,
          _id:user._id
        })
      },
      err => {
        console.log(err);

      }

    )
  }

  
  updateUser() {
    let data = this.usersUpdateForm.value;
    let user = new User(data.nom, data.prenom, data.email, data.password, data.num, data.target, this.entreprise,data.role,data._id,data.mobile,data.site,data.matricule,data.devise,data.adresse,data.ville,data.code_postal,data.pays)
    //alert(JSON.stringify(data)
    this.userService.updateUser(user,user._id).subscribe(
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


 