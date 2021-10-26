import { Component, OnInit, ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';
import { Devis } from 'src/app/components/devis';
import { DevisService } from 'src/app/Services/devis.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.css']
})
export class DevisListComponent implements OnInit {

  devisDelete;
  public devis: any ;
  devisList:any[]=[];
  tempDevisList: any[]=[];
  copyOfTempDevisList: any[] =[];

  dialog: any[]=[];
  isPopupOpened: boolean;
  array_months=[{month :"Janvier",value :1},{month :"Février",value :2},{month :"Mars",value :3},{month :"Avril",value :4},{month :"Mai",value :5},{month :"Juin",value :6},{month :"Juillet",value :7},{month :"Août",value :8},{month :"Septembre",value :9},{month :"Octobre",value :10},{month :"Novembre",value :11},{month :"Décembre",value :12}]
  

  @ViewChild('viewModal')modal:any;
  isUpdate:boolean = false;
  selectedDevis:any;
  monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
 
  constructor(private devisService:DevisService, private router: Router,private http: HttpClient,private route: ActivatedRoute) { }
  loadDevisList(){
    debugger;
    this.devisService.getAllDevis().subscribe(
      result => {
        debugger;
        console.log(result);
        result.forEach(obj => {
          if (obj.date_document){
            obj.Date_month = new Date(Number(obj.date)).getMonth()+1
          }
         });
         
         this.devisList = result;
         this.tempDevisList = this.devisList;
         this.copyOfTempDevisList = this.devisList;
      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.loadDevisList()
  }
  selectDevis(devis){
    debugger
    this.selectedDevis = devis;
  }

  filter(value) {
    debugger;
    console.log(value);
    this.tempDevisList = this.copyOfTempDevisList;
    if (value != null || value != '' ) {
      this.tempDevisList = this.tempDevisList.filter((ct) => { 
        return ct.client.nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.devisList=[];
      this.devisList=this.devis;
    }
    
  }


  

  updateDevis(i){
    let devis=this.devisList[i];
    switch (devis.etat){
        case "créé": 
        console.log("créé");
        this.router.navigate(['/dmodifier']);
        break;
        case "négociation": 
        console.log("négociation");
        this.router.navigate(['/dnegociation']);
        break;
        case "accepter": 
        console.log("accepter");
        this.router.navigate(['/daccepter']);
        break;
        default: 
        console.log("annuler");
        this.router.navigate(['/dannuler']);
        break;

    }
  }

  getData(value){
    debugger;
    console.log(value)
    this.tempDevisList = this.devisList.filter(data =>Number(data.Date_month) ==  value) ;
    this.copyOfTempDevisList =this.tempDevisList;
    //console.log(this.devisList.filter(data =>(data.Date_month) === 7))

  }

  deleteRow(event) {
    this.devisDelete = event;
  } 

  delete(){
    let index = this.devisList.indexOf(this.devisDelete);
    this.devisList.splice(index,1);
    this.devisService.deleteDevis(this.devisDelete._id).subscribe(
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
  onViewClick(devis){
    this.isUpdate=true;
    this.devis = JSON.parse(JSON.stringify(devis)); 
    let idDevis = this.route.snapshot.params.id;
  console.log(idDevis);
  this.devisService.getOneDevis(idDevis).subscribe(
    res => {
      console.log(res['devis']);
      let devis = res['devis'];

      this.devis = devis;

    },
    err => {
      console.log(err);
    }
  )
}



}