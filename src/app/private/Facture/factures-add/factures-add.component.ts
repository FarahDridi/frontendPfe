import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Home } from 'src/app/components/home';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/Services/facture.service';
import { Facture } from 'src/app/components/facture';

@Component({
  selector: 'app-factures-add',
  templateUrl: './factures-add.component.html',
  styleUrls: ['./factures-add.component.css']
})
export class FacturesAddComponent implements OnInit {

  public facturesAddForm: FormGroup;
  factureID: string;
  Home = new Home();
  dataarray=[];
  dataarr=[];
  dataar=[];

  constructor(builder: FormBuilder,private toastr: ToastrService, private factureService: FactureService, private router:Router) {
    let facturesAddControls = {

      client:new FormControl("",[Validators.required]),
      date_document: new FormControl(""),
      projet: new FormControl(""),
      note:new FormControl(""),
      designation:new FormControl("",[Validators.required]),
      quantite:new FormControl(""),
      prix_ht:new FormControl("",[Validators.required]),
      unite:new FormControl(""),
      tva:new FormControl(""),
      total_ht:new FormControl("") ,
      etat:new FormControl("")

    }
    this.facturesAddForm = builder.group(facturesAddControls)
  }

  get client() { return this.facturesAddForm.get('client') }
  get date_document() { return this.facturesAddForm.get('date_document') }
  get projet() { return this.facturesAddForm.get('projet') }
  get note() { return this.facturesAddForm.get('note') }
  get designation() { return this.facturesAddForm.get('designation') }
  get quantite() { return this.facturesAddForm.get('quantite') }
  get prix_ht() { return this.facturesAddForm.get('prix_ht') }
  get unite() { return this.facturesAddForm.get('unite') }
  get tva() { return this.facturesAddForm.get('tva') }
  get total_ht() { return this.facturesAddForm.get('total_ht') }
  get etat() { return this.facturesAddForm.get('etat') }

  ngOnInit(): void {
    this.factureID=localStorage.getItem('factureId');
  }


  addForm(){
    this.Home=new Home
    this.dataarray.push(this.Home);
  }
  removeForm(index){
    this.dataarray.splice(index);
  }

  addSForm(){
    this.Home=new Home
    this.dataarr.push(this.Home);
  }
  removeSForm(index){
    this.dataarr.splice(index);
  }
  
  addTForm(){
    this.Home=new Home
    this.dataar.push(this.Home);
  }
  removeTForm(index){
    this.dataar.splice(index);
  }





  facturesUser() {
    
    let data = this.facturesAddForm.value;
    let factures = new Facture (data.client, data.data_document, data.projet, data.note, data.designation, data.quantite, data.prix_ht, data.unite, data.tva, data.total_ht,data.etat)
  //alert(JSON.stringify(data))
this.factureService.addFacture(factures).subscribe(
  res => {
    console.log("resultat: ",res);
    console.log("id: ",res._id);
    localStorage.setItem('factureId', res._id);
    this.toastr.success(res.message);
    this.router.navigate(['/fmodifier']);
  }   ,
   error =>{
    alert(JSON.stringify(error));
  }
)


    
  }

  etatCree(){
    this.factureService.updateETFacture("créé", this.factureID).subscribe(
      res => {
        this.router.navigate(['/fmodifier']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }


}
