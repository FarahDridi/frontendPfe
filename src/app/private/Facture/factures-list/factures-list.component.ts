import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { FactureService } from 'src/app/Services/facture.service';


@Component({
  selector: 'app-factures-list',
  templateUrl: './factures-list.component.html',
  styleUrls: ['./factures-list.component.css']
})
export class FacturesListComponent implements OnInit {
  factureDelete;
  public factures: any [] = [];
  facturesList:any[]=[];

  constructor(private factureService:FactureService) { }

  ngOnInit(): void {
    this.getAllFactures();
  }

  getAllFactures(){
    this.facturesList=[];

    this.factureService.getAllFactures().subscribe(
      result =>{
        this.facturesList=result;
        this.factures = result;
      },
      error =>{
        console.log(error);
      }
    )
  }


  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.facturesList=[];
      this.facturesList = this.factures.filter((ct) => { 
        return ct.client.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.facturesList=[];
      this.facturesList=this.factures;
    }
    
  }

  deleteRow(event) {
    this.factureDelete = event;
  } 

  delete(){
    let index = this.facturesList.indexOf(this.factureDelete);
    this.facturesList.splice(index,1);
    this.factureService.deleteFacture(this.factureDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }


}



