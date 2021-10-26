import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  constructor( builder :FormBuilder, private http:HttpClient , private router:Router) {

    let signinControls = {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
       ])
    }
    this.signinForm = builder.group (signinControls)
  }
  get email() { return this.signinForm.get('email') }
  get password() { return this.signinForm.get('password') }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")
    if (token) {
      this.router.navigateByUrl('/dashboard')
    }
  }
  signinUser () {
    console.log(this.signinForm.value);
    this.http
      .post<any>("http://localhost:3000/user/signin", this.signinForm.value)
      .subscribe(
        (result) => {

          let token = result.token
          localStorage.setItem("mytoken", token)
          this.router.navigateByUrl('/dashboard')
        },  //l'execution mte3ha tsiir automatiquement en cas de succés
        (error) => {
          console.log(error);
        }
      )

}
}
