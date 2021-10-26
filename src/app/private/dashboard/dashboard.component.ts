import { Component, OnInit } from '@angular/core';
import JWT from "jwt-decode";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dashboardForm: FormGroup;

  constructor(builder: FormBuilder, private devisService: UserService, private router: Router, private http:HttpClient) {
    let dashboardControls = {

      ent: new FormControl(""),
      prenom: new FormControl(""),
      nom: new FormControl(""),
      role: new FormControl("")
    }
    this.dashboardForm = builder.group(dashboardControls)
  }

  get ent() { return this.dashboardForm.get('ent') }
  get prenom() { return this.dashboardForm.get('prenom') }
  get nom() { return this.dashboardForm.get('nom') }
  get role() { return this.dashboardForm.get('role') }


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
        this.dashboardForm.patchValue({
          
          ent: data.ent,
          prenom: data.prenom, 
          nom: data.nom,
          role: data.role
        });
      },
      (error) => {
        console.log(error);
      }
    )
    }


}
