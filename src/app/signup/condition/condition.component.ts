import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators
import { ToastrService } from 'ngx-toastr';

import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  public conditionForm: FormGroup;

  constructor(builder: FormBuilder,private toastr: ToastrService, private http:HttpClient , private router:Router) {
    let conditionControls = {
      act: new FormControl("", [
        Validators.required]),
      taille: new FormControl("", [Validators.required]),
      pays: new FormControl("", [Validators.required]),
      dev: new FormControl("", [Validators.required])
    }
    this.conditionForm = builder.group(conditionControls)
  }

  get act() { return this.conditionForm.get('act') }
  get taille() { return this.conditionForm.get('taille') }
  get pays() { return this.conditionForm.get('pays') }
  get dev() { return this.conditionForm.get('dev') }
  
  ngOnInit(): void {
  }

  conditionUser() {
    this.http
    .post<any>("http://localhost:3000/condition/condition",this.conditionForm.value)
    .subscribe(
      (result) => {
        console.log(result.message);
        this.toastr.success(result.message);
        this.router.navigateByUrl('/signin')
      },
      (error) => {
        console.log(error);
      }
    ) 
  }


}