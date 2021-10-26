import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { FournisseurService } from 'src/app/Services/fournisseur.service';
@Component({
  selector: 'app-fournisseurs-list',
  templateUrl: './fournisseurs-list.component.html',
  styleUrls: ['./fournisseurs-list.component.css']
})
export class FournisseursListComponent implements OnInit {
  
  public fournisseurs: any [] = []
  fournisseurDelete;
  fournisseursList:any[]=[];

  

  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
    this.getAllFournisseurs();
  }

  deleteRow(event) {
    this.fournisseurDelete = event;
} 
delete(){
  let index = this.fournisseursList.indexOf(this.fournisseurDelete);
  this.fournisseursList.splice(index,1);
  this.fournisseurService.deleteFournisseur(this.fournisseurDelete._id).subscribe(
   res => {
     console.log(res);
   },
   err => {
     console.log(err);
   }

 )
 document.getElementById("closeModalButton").click();
}




  getAllFournisseurs(){
    this.fournisseursList=[];

    this.fournisseurService.getAllFournisseurs().subscribe(
      result =>{
        this.fournisseursList=result;
        this.fournisseurs = result;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  

  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.fournisseursList=[];
      this.fournisseursList = this.fournisseurs.filter((ct) => { 
        return ct.nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.fournisseursList=[];
      this.fournisseursList=this.fournisseurs;
    }
    
  }


}
