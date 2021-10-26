import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import JWT from "jwt-decode";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(builder: FormBuilder, private userService: UserService, private router: Router, private http:HttpClient) {
    let loginControls = {
      act: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      nouveau: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      conf: new FormControl("", [
        Validators.required
      ]),
      ent: new FormControl(""),
      prenom: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),

    }

    this.profileForm = builder.group(loginControls)
  }

  get act() { return this.profileForm.get('act') }
  get nouveau() { return this.profileForm.get('nouveau') }
  get conf() { return this.profileForm.get('conf') }
  get ent() { return this.profileForm.get('ent') }
  get prenom() { return this.profileForm.get('prenom') }
  get email() { return this.profileForm.get('email') }
  get role() { return this.profileForm.get('role') }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken");
      let t = JWT(token);
      const data = JSON.parse(JSON.stringify(t));
      console.log(typeof t)
      const id = data.id
      console.log(typeof data)
      console.log(id);
      this.http.get<any>('http://localhost:3000/user/currentUser/' + id).subscribe(
        (result) => {
          console.log(result._id);
          const data = JSON.parse(JSON.stringify(result))
          this.profileForm.patchValue({
            
            ent: data.ent,
            email: data.email,
            prenom: data.prenom,
            role: data.role
          });
        },
        (error) => {
          console.log(error);
        }
      )
      }
  
  profileUser() {
    console.log(this.profileForm.value);
    
  }

}










