import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { ActivatedRoute} from '@angular/router';
import { Fournisseur } from 'src/app/components/fournisseur';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { FournisseurService } from 'src/app/Services/fournisseur.service';
@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent implements OnInit {

  
  public fournisseur:any;

  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private fournisseurService:FournisseurService) {
  
  }
  
 
  ngOnInit(): void {
    this.fournisseursUser();
  }
  fournisseursUser() {
    let idFournisseur =this.route.snapshot.params.id;
    console.log(idFournisseur);
    this.fournisseurService.getOneFournisseur(idFournisseur).subscribe(
      res => {
        console.log(res['fournisseur']);
        let fournisseur=res['fournisseur'];
        this.fournisseur=fournisseur;
      },
      err => {
        console.log(err);
      }

    )
  }

  

}


 