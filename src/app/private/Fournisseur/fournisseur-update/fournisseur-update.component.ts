import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators
import { ActivatedRoute} from '@angular/router';
import { Fournisseur } from 'src/app/components/fournisseur';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { FournisseurService } from 'src/app/Services/fournisseur.service';


@Component({
  selector: 'app-fournisseur-update',
  templateUrl: './fournisseur-update.component.html',
  styleUrls: ['./fournisseur-update.component.css']
})
export class FournisseurUpdateComponent implements OnInit {
  
  public fournisseursUpdateForm:FormGroup;
  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private fournisseurService:FournisseurService) {
    let fournisseursUpdateControls={
      
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
      date_creation: new FormControl(""),
      _id: new FormControl("", [Validators.required])


    }
    this.fournisseursUpdateForm = builder.group(fournisseursUpdateControls)
  }

  get raison() { return this.fournisseursUpdateForm.get('raison') }
  get site() { return this.fournisseursUpdateForm.get('site') }
  get civilite() { return this.fournisseursUpdateForm.get('civilite') }
  get nom() { return this.fournisseursUpdateForm.get('nom') }
  get email() { return this.fournisseursUpdateForm.get('email') }
  get num() { return this.fournisseursUpdateForm.get('num') }
  get pays() { return this.fournisseursUpdateForm.get('pays') }
  get region() { return this.fournisseursUpdateForm.get('region') }
  get code() { return this.fournisseursUpdateForm.get('code') }
  get type_facture() { return this.fournisseursUpdateForm.get('type_facture') }
  get adresse() { return this.fournisseursUpdateForm.get('adresse') }
  get date_creation() { return this.fournisseursUpdateForm.get('date_creation') }
  get _id() { return this.fournisseursUpdateForm.get('_id') }

  ngOnInit(): void {
    let idFournisseur =this.route.snapshot.params.id;
    console.log(idFournisseur);
    this.fournisseurService.getOneFournisseur(idFournisseur).subscribe(
      res => {
        console.log(res['fournisseur']);
        let fournisseur=res['fournisseur'];
        this.fournisseursUpdateForm.patchValue({
          raison:fournisseur.raison,
          site:fournisseur.site,
          civilite:fournisseur.civilite,
          nom:fournisseur.nom,
          email:fournisseur.email,
          num:fournisseur.num,
          pays:fournisseur.pays,
          region:fournisseur.region,
          code:fournisseur.code,
          type_facture:fournisseur.type_facture,
          adresse:fournisseur.adresse,
          date_creation:fournisseur.date_creation,
          _id:fournisseur._id
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

  
  updateFournisseur() {
    let data = this.fournisseursUpdateForm.value;
    let fournisseur = new Fournisseur(data.raison, data.site, data.civilite, data.nom, data.email, data.num, data.pays, data.region, data.code, data.type_facture, data.adressse,data._id)
    //alert(JSON.stringify(data)
    this.fournisseurService.updateFournisseur(fournisseur,fournisseur._id).subscribe(
      res => {
        
        this.router.navigate(['/fournisseurs/list']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }

  

}


 