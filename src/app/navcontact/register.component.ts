import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(builder: FormBuilder) {

    let registerControls = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")
      ]),
      lastname: new FormControl("", [Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Z][a-z 'éç]+")]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8)
    ]),
      repassword: new FormControl("", [Validators.required]),
      ent: new FormControl("", [Validators.required])
    }

    this.registerForm = builder.group(registerControls)

  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }
  get ent() { return this.registerForm.get('ent') }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerForm.value);
  }

}
