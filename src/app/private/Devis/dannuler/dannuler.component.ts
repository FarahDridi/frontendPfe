import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { analyzeAndValidateNgModules } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DevisService } from 'src/app/Services/devis.service';
import { Devis } from 'src/app/components/devis';
@Component({
  selector: 'app-dannuler',
  templateUrl: './dannuler.component.html',
  styleUrls: ['./dannuler.component.css']
})
export class DannulerComponent implements OnInit {
  public devisAddForm: FormGroup;
  devisID: string;
  constructor(builder: FormBuilder, private devisService: DevisService, private router:Router) {
    let devisAddControls = {
      etat:new FormControl("")
    }
    this.devisAddForm = builder.group(devisAddControls)
  }
  get etat() { return this.devisAddForm.get('etat') }
  ngOnInit(): void {
    this.devisID=localStorage.getItem('devisId');
  }

  devisUser() {
    
    let data = this.devisAddForm.value;
    let devis = new Devis (null,null,null,null,null,null,null,null,null,null, null, null,data.etat)
  //alert(JSON.stringify(data))
  this.devisService.addDevis(devis).subscribe(
    res => {
      this.router.navigate(['/daccepter']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  )

    
  }

  etatAnnuler(){
    this.devisService.updateETDevis("annuler", this.devisID).subscribe(
      res => {
        this.router.navigate(['/dreactiver']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }

  

}
