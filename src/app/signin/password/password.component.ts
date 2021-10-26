import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  public passwordForm: FormGroup;

  constructor(builder: FormBuilder) {

    let passwordControls = {
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ])
    }

    this.passwordForm = builder.group(passwordControls)
  }
  get email() { return this.passwordForm.get('email') }

  ngOnInit(): void {
  }

  passwordUser() {
    console.log(this.passwordForm.value);
  }

}
