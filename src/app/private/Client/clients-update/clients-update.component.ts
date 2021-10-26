import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators
import { ActivatedRoute} from '@angular/router';
import { Client } from 'src/app/components/client';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.css']
})
export class ClientsUpdateComponent implements OnInit {
  
  public clientsUpdateForm:FormGroup;
  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private clientService:ClientService) {
    let clientsUpdateControls={
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
      aut: new FormControl(""),
      grille: new FormControl(""),
      delai: new FormControl(""),
      det: new FormControl(""),
      date_creation: new FormControl(""),
      _id: new FormControl("", [Validators.required])


    }
    this.clientsUpdateForm = builder.group(clientsUpdateControls)
  }

  get type() { return this.clientsUpdateForm.get('type') }
  get raison() { return this.clientsUpdateForm.get('raison') }
  get site() { return this.clientsUpdateForm.get('site') }
  get civilite() { return this.clientsUpdateForm.get('civilite') }
  get nom() { return this.clientsUpdateForm.get('nom') }
  get email() { return this.clientsUpdateForm.get('email') }
  get num() { return this.clientsUpdateForm.get('num') }
  get pays() { return this.clientsUpdateForm.get('pays') }
  get region() { return this.clientsUpdateForm.get('region') }
  get code() { return this.clientsUpdateForm.get('code') }
  get type_facture() { return this.clientsUpdateForm.get('type_facture') }
  get adresse() { return this.clientsUpdateForm.get('adresse') }
  get aut() { return this.clientsUpdateForm.get('aut') }
  get grille() { return this.clientsUpdateForm.get('grille') }
  get delai() { return this.clientsUpdateForm.get('delai') }
  get det() { return this.clientsUpdateForm.get('det') }
  get date_creation() { return this.clientsUpdateForm.get('date_creation') }
  get _id() { return this.clientsUpdateForm.get('_id') }

  ngOnInit(): void {
    let idClient =this.route.snapshot.params.id;
    console.log(idClient);
    this.clientService.getOneClient(idClient).subscribe(
      res => {
        console.log(res['client']);
        let client=res['client'];
        this.clientsUpdateForm.patchValue({
          type:client.type,
          raison:client.raison,
          site:client.site,
          civilite:client.civilite,
          nom:client.nom,
          email:client.email,
          num:client.num,
          pays:client.pays,
          region:client.region,
          code:client.code,
          type_facture:client.type_facture,
          adresse:client.adresse,
          delai:client.delai,
          det:client.det,
          date_creation:client.date_creation,
          _id:client._id
        })
      },
      err => {
        console.log(err);
      }

    )
  }

  changeType(e){
    console.log(e.target.value);
  }

  
  updateClient() {
    let data = this.clientsUpdateForm.value;
    let client = new Client(data.type, data.raison, data.site, data.civilite, data.nom, data.email, data.num, data.pays, data.region, data.code, data.type_facture, data.adresse, data.delai,data.det,data._id)
    //alert(JSON.stringify(data)
    this.clientService.updateClient(client,client._id).subscribe(
      res => {
        
        this.router.navigate(['/clients/list']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }

  

}


 