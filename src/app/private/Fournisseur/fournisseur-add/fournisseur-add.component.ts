import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/Services/fournisseur.service';
import { Fournisseur } from 'src/app/components/fournisseur';


@Component({
  selector: 'app-fournisseur-add',
  templateUrl: './fournisseur-add.component.html',
  styleUrls: ['./fournisseur-add.component.css']
})
export class FournisseurAddComponent implements OnInit {

  public fournisseursAddForm: FormGroup;
  constructor(builder: FormBuilder, private fournisseurService: FournisseurService, private router:Router) {
    let fournisseursAddControls = {

      raison: new FormControl(""),
      site: new FormControl(""),
      civilite: new FormControl(""),
      nom: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z 'éç]+[A-Z][a-z 'éç]+")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      num: new FormControl(""),
      pays: new FormControl("", [Validators.required]),
      region: new FormControl(""),
      code: new FormControl(""),
      type_facture: new FormControl(""),
      adresse: new FormControl(""),
      date_creation: new FormControl("")

    }
    this.fournisseursAddForm = builder.group(fournisseursAddControls)
  }

  get raison() { return this.fournisseursAddForm.get('raison') }
  get site() { return this.fournisseursAddForm.get('site') }
  get civilite() { return this.fournisseursAddForm.get('civilite') }
  get nom() { return this.fournisseursAddForm.get('nom') }
  get email() { return this.fournisseursAddForm.get('email') }
  get num() { return this.fournisseursAddForm.get('num') }
  get pays() { return this.fournisseursAddForm.get('pays') }
  get region() { return this.fournisseursAddForm.get('region') }
  get code() { return this.fournisseursAddForm.get('code') }
  get type_facture() { return this.fournisseursAddForm.get('type_facture') }
  get adresse() { return this.fournisseursAddForm.get('adresse') }
  get date_creation() { return this.fournisseursAddForm.get('date_creation') }

  ngOnInit(): void {
  }

  changeType(e){
    console.log(e.target.value);
  }


  fournisseursUser() {

  let data = this.fournisseursAddForm.value;
  let fournisseur = new Fournisseur( data.raison, data.site, data.civilite, data.nom, data.email, data.num, data.pays, data.region, data.code, data.type_facture, data.adressse)
  //alert(JSON.stringify(data))
  this.fournisseurService.addFournisseur(fournisseur).subscribe(
    res => {
      
      this.router.navigate(['/fournisseurs/list']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  )

   

  

  }


}


