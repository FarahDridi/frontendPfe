import { Component, OnInit } from '@angular/core';
import JWT from "jwt-decode";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { UserService } from 'src/app/Services/user.service';
  import { User } from 'src/app/components/user';
@Component({
  selector: 'app-cogent',
  templateUrl: './cogent.component.html',
  styleUrls: ['./cogent.component.css']
})
export class CogentComponent implements OnInit {
    public cogForm: FormGroup;
    user:any;
  
    constructor(builder: FormBuilder, private devisService: UserService, private router: Router, private http:HttpClient) {
      let cogControls = {

        _id: new FormControl(""),
        ent: new FormControl(""),
        email: new FormControl(""),
        prenom: new FormControl(""),
        nom: new FormControl(""),
        num: new FormControl(""),
        dev: new FormControl("")
      }
      this.cogForm = builder.group(cogControls)
    }
  
    get _id() { return this.cogForm.get('_id') }
    get ent() { return this.cogForm.get('ent') }
    get email() { return this.cogForm.get('email') }
    get prenom() { return this.cogForm.get('prenom') }
    get nom() { return this.cogForm.get('nom') }
    get num() { return this.cogForm.get('num') }
    get dev() { return this.cogForm.get('dev') }
  
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
          this.cogForm.patchValue({
            
            _id: data._id,
            ent: data.ent,
            email: data.email,
            prenom: data.prenom, 
            nom: data.nom,
            num: data.num,
            dev: data.dev
          });
        },
        (error) => {
          console.log(error);
        }
      )
      }
  
  
  }
  