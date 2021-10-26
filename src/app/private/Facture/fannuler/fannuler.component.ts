import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";



import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/Services/facture.service';
import { Facture } from 'src/app/components/facture';
@Component({
  selector: 'app-fannuler',
  templateUrl: './fannuler.component.html',
  styleUrls: ['./fannuler.component.css']
})
export class FannulerComponent implements OnInit {

  public facturesAddForm: FormGroup;
  factureID: string;
  
  constructor(builder: FormBuilder, private factureService: FactureService, private router:Router) {
    let facturesAddControls = {

      etat:new FormControl("")

    }
    this.facturesAddForm = builder.group(facturesAddControls)
  }

  get etat() { return this.facturesAddForm.get('etat') }

  ngOnInit(): void {
    this.factureID=localStorage.getItem('factureId');
  }


  facturesUser() {
    
    let data = this.facturesAddForm.value;
    let factures = new Facture (null, null, null, null, null, null, null, null, null, null,data.etat)
  //alert(JSON.stringify(data))
  this.factureService.addFacture(factures).subscribe(
    res => {
      this.router.navigate(['/fmodifier']);
    },
     error =>{
      alert(JSON.stringify(error));
    }
  )

    
  }

  etatAnnuler(){
    this.factureService.updateETFacture("annuler", this.factureID).subscribe(
      res => {
        this.router.navigate(['/freactiver']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }


}
