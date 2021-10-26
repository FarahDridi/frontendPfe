import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from 'src/app/components/client';


@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {
  public clientsAddForm: FormGroup;
  constructor(builder: FormBuilder, private clientService: ClientService, private router:Router) {
    let clientsAddControls = {

      type: new FormControl(""),
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
      delai: new FormControl(""),
      det: new FormControl(""),
      date_creation: new FormControl("")

    }
    this.clientsAddForm = builder.group(clientsAddControls)
  }

  get type() { return this.clientsAddForm.get('type') }
  get raison() { return this.clientsAddForm.get('raison') }
  get site() { return this.clientsAddForm.get('site') }
  get civilite() { return this.clientsAddForm.get('civilite') }
  get nom() { return this.clientsAddForm.get('nom') }
  get email() { return this.clientsAddForm.get('email') }
  get num() { return this.clientsAddForm.get('num') }
  get pays() { return this.clientsAddForm.get('pays') }
  get region() { return this.clientsAddForm.get('region') }
  get code() { return this.clientsAddForm.get('code') }
  get type_facture() { return this.clientsAddForm.get('type_facture') }
  get adresse() { return this.clientsAddForm.get('adresse') }
  get delai() { return this.clientsAddForm.get('delai') }
  get det() { return this.clientsAddForm.get('det') }
  get date_creation() { return this.clientsAddForm.get('date_creation') }

  ngOnInit(): void {
  }

  changeType(e){
    console.log(e.target.value);
  }


  clientsUser() {

  let data = this.clientsAddForm.value;
  let client = new Client(data.type, data.raison, data.site, data.civilite, data.nom, data.email, data.num, data.pays, data.region, data.code, data.type_facture, data.adresse, data.delai,data.det)
  //alert(JSON.stringify(data))
  this.clientService.addClient(client).subscribe(
    res => {
      
      this.router.navigate(['/clients/list']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  )

   

  

  }


}


