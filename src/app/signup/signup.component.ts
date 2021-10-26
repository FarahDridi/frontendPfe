import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";


import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';

// FormGroup, FormControl, FormBuilder, Validators
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public signinForm: FormGroup;

  constructor(builder: FormBuilder, private http:HttpClient , private router:Router) {

    let signupControls = {
      prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),
      nom: new FormControl("", [Validators.required,
      Validators.minLength(2),
      Validators.pattern("[A-Z][a-z 'éç]+")]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      repassword: new FormControl("", [Validators.required]),
      ent: new FormControl("", [Validators.required])
    }

    /* let signinControls = {

      emailsignin: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      passwordsignin: new FormControl("", [
        Validators.required,
      ])

    }
 */
    this.signupForm = builder.group(signupControls)
    // this.signinForm = builder.group(signinControls)
  }

  get prenom() { return this.signupForm.get('prenom') }
  get nom() { return this.signupForm.get('nom') }
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }
  get repassword() { return this.signupForm.get('repassword') }
  get ent() { return this.signupForm.get('ent') }

  
  /* get emailsignin() { return this.signinForm.get('emailsignin') }
  get passwordsignin() { return this.signinForm.get('passwordsignin') } */

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")
    if (token) {
      this.router.navigateByUrl('/dashboard')
    }
  }
  validatePassword(){
    let isValid = true;
    this.signupForm.get('repassword').setErrors({'invalid':null});
    if(this.signupForm.get('password').value !== this.signupForm.get('repassword').value){
      isValid = false;
      // this.signinForm.get('password').setErrors({invalid:true});
      this.signupForm.get('repassword').setErrors({'invalid':true});
    }
    return isValid;
  }
  signupUser() {
    if(!this.validatePassword()){
      return ;
    }
    console.log(this.signupForm.value);
    this.http
    .post<any>("http://localhost:3000/user/signup",this.signupForm.value)
    .subscribe(
      (result) => {
        console.log(result.message);
        this.router.navigateByUrl('/condition')
      },  //l'execution mte3ha tsiir automatiquement en cas de succés
      (error) => {
        console.log(error);
      }
    ) 
  }

  /* signinUser() {
    console.log(this.signinForm.value);
    this.http
    .post<any>("http://localhost:3000/user/signin",this.signinForm.value)
    .subscribe(
      (result) => {
        console.log(result.message);
        this.router.navigateByUrl('/dashboard')
      },  //l'execution mte3ha tsiir automatiquement en cas de succés
      (error) => {
        console.log(error);
      }
    ) 
    
  } */

}
