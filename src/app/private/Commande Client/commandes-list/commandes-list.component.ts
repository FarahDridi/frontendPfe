import { Component, OnInit, ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';
import { Commande } from 'src/app/components/commande';
import { CommandeService } from 'src/app/Services/commande.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-commandes-list',
  templateUrl: './commandes-list.component.html',
  styleUrls: ['./commandes-list.component.css']
})
export class CommandesListComponent implements OnInit {
  commandeDelete;
  public commande: any ;
  commandesList:any[]=[];
  tempCommandesList: any[]=[];
  copyOfTempCommandesList: any[] =[];

  dialog: any[]=[];
  isPopupOpened: boolean;
  array_months=[{month :"Janvier",value :1},{month :"Février",value :2},{month :"Mars",value :3},{month :"Avril",value :4},{month :"Mai",value :5},{month :"Juin",value :6},{month :"Juillet",value :7},{month :"Août",value :8},{month :"Septembre",value :9},{month :"Octobre",value :10},{month :"Novembre",value :11},{month :"Décembre",value :12}]
  

  @ViewChild('viewModal')modal:any;
  isUpdate:boolean = false;
  selectedCommande:any;
  monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
 
  constructor(private commandeService:CommandeService, private router: Router,private http: HttpClient,private route: ActivatedRoute) { }
  loadCommandesList(){
    debugger;
    this.commandeService.getAllCommandes().subscribe(
      result => {
        debugger;
        console.log(result);
        result.forEach(obj => {
          if (obj.date_document){
            obj.Date_month = new Date(Number(obj.date)).getMonth()+1
          }
         });
         
         this.commandesList = result;
         this.tempCommandesList = this.commandesList;
         this.copyOfTempCommandesList = this.commandesList;
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.loadCommandesList()
  }
  selectCommande(commande){
    this.selectedCommande = commande;
  }

  filter(value) {
    debugger;
    console.log(value);
    this.tempCommandesList = this.copyOfTempCommandesList;
    if (value != null || value != '' ) {
      this.tempCommandesList = this.tempCommandesList.filter((ct) => { 
        return ct.client.nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.commandesList=[];
      this.commandesList=this.commande;
    }
    
  }

  
  getData(value){
    debugger;
    console.log(value)
    this.tempCommandesList = this.commandesList.filter(data =>Number(data.Date_month) ==  value) ;
    this.copyOfTempCommandesList =this.tempCommandesList;
  }

  deleteRow(event) {
    this.commandeDelete = event;
  } 

  delete(){
    let index = this.commandesList.indexOf(this.commandeDelete);
    this.commandesList.splice(index,1);
    this.commandeService.deleteCommande(this.commandeDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }



 
//details devis
  onViewClick(commande){
    this.isUpdate=true;
    this.commande = JSON.parse(JSON.stringify(commande)); 
    let idCommande = this.route.snapshot.params.id;
  console.log(idCommande);
  this.commandeService.getOneCommande(idCommande).subscribe(
    res => {
      console.log(res['commandes']);
      let commande = res['commandes'];

      this.commande = commande;

    },
    err => {
      console.log(err);
    }
  )
}



}