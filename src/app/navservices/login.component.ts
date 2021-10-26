import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroups , Formcontrol , FormBuilder , Validators 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor( builder :FormBuilder) {

    let loginControls = {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
       ])
    }
    this.loginForm = builder.group (loginControls)
  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }
  loginUser () {
    console.log(this.loginForm.value);
    //envoi des données vers APIs ( backend )
  }

}
