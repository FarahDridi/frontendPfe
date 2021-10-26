import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Home } from 'src/app/components/home';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DevisService } from 'src/app/Services/devis.service';
import { Devis } from 'src/app/components/devis';

// import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
import { jsPDF } from "jspdf";
import { ClientService } from 'src/app/Services/client.service';
import { DatePipe } from '@angular/common';
import { ServiceService } from 'src/app/Services/service.service';




@Component({
  selector: 'app-devis-add',
  templateUrl: './devis-add.component.html',
  styleUrls: ['./devis-add.component.css']
})
export class DevisAddComponent implements OnInit {
  public devisAddForm: FormGroup;
  devisID: string;
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf/pdf-test.pdf";
  Home = new Home();
  productsList : any[] =[];
  productsListSummary : any[] =[];
  currentDate :any;
  dataarray=[];
  dataarr=[];
  dataar=[];

  isChecked: boolean = true;

  timbreFiscale : number = 600;
  totalHt: number = 0;
  totalHtWithFodec = 0;
  totalTVA: number = 0;
  totalFODEC: number = 0;
  totalTTC: number = 0;
  totalPayer: number = 0;
  base : number = 0;
  montant : number = 0;
  totalHT : number = 0;


  count = 0;
  origin_ht = 0;

  clients =[];
  services =[];
  selectedClient = {
    adresse: '',
    civilite: '',
    code: '',
    date_creation: '',
    delai: '',
    det: '',
    email: '',
    nom: '',
    num: '',
    pays: '',
    raison: '',
    region: '',
    site: '',
    type: '',
    type_facture: '',
    __v: 0,
    _id: '',
  };
  selectedService = {
    lib: '',
    prix: '',
    quantite:1,
    taxe: '',
    tva: '',
    resultat_ht:'',
    _id: '',
  };

  timbreChange(e){
    debugger
    this.isChecked = !this.isChecked;

    this.timbreFiscale = this.isChecked ? 600 : 0;

    this.calculateSummary();

    this.totalHt = this.sumHT(this.productsList);
    this.totalHtWithFodec = this.sumHTWithFodec();
    this.totalTVA = this.sumTVA(this.productsListSummary);
    this.totalFODEC =  this.sumFODEC(this.totalHtWithFodec);
    this.totalTTC = this.sumTTC(this.totalHt, this.totalFODEC, this.totalTVA);
    this.totalPayer = this.net_payer(this.totalTTC, this.timbreFiscale);
  
  }

  clientChange(e){
    debugger;
    this.selectedClient = e;
  }
  getClients(){
    this.clientService.getAllClients().subscribe(res =>{
      debugger;
      this.clients = res;
    });
  }
  serviceChange(e, index){
    debugger;
    this.productsList[index].lib = e.lib;
    this.productsList[index].prix = e.prix;
    this.productsList[index].taxe = e.taxe;
    this.productsList[index].tva = e.tva;
    this.productsList[index].resultat_ht = Number(e.resultat_ht) * e.quantite;
    this.productsList[index].quantite = e.quantite;
    
    this.calculateSummary();

    this.totalHt = this.sumHT(this.productsList);
    this.totalHtWithFodec = this.sumHTWithFodec();
    this.totalTVA = this.sumTVA(this.productsListSummary);
    this.totalFODEC =  this.sumFODEC(this.totalHtWithFodec);
    this.totalTTC = this.sumTTC(this.totalHt, this.totalFODEC, this.totalTVA);
    this.totalPayer = this.net_payer(this.totalTTC, this.timbreFiscale);
  

  }
  getServices(){
    this.serviceService.getAllServices().subscribe(res =>{
      debugger;
      this.services = res;
    });
  }


  total_ht:number;
  prix_value:number;
  tva_value:number;
  taxe_value:number;
  quantity_value:number;
  ddd:number;
  ff="";

  changeAl(e) {
    this.tva_value = e;
    this.calculateSummary();
  }
  changeAt(e) {
    this.taxe_value = e.target.value;
    this.calculateSummary();
  }
  changeLol(e) {
    debugger
    this.quantity_value = e.target.value;
  }

  
  changeQuantite(e, index) {
    debugger
    if(e === '')
      return;

    if(this.count === 0){
      this.origin_ht = this.productsList[index].resultat_ht;
    }

    this.productsList[index].quantite = e;
    this.productsList[index].resultat_ht =  this.origin_ht;
    this.productsList[index].resultat_ht = Number(this.productsList[index].resultat_ht) * e;
    
    this.calculateSummary();

    this.totalHt = this.sumHT(this.productsList);
    this.totalHtWithFodec = this.sumHTWithFodec();
    this.totalTVA = this.sumTVA(this.productsListSummary);
    this.totalFODEC =  this.sumFODEC(this.totalHtWithFodec);
    this.totalTTC = this.sumTTC(this.totalHt, this.totalFODEC, this.totalTVA);
    this.totalPayer = this.net_payer(this.totalTTC, this.timbreFiscale);
  
    this.count++;
  }
  changeFn(e) {
    this.prix_value = e.target.value;
    this.total_ht=e.target.value*1000;
    this.ddd= this.total_ht/100;
    this.ff = this.ddd.toString();

    this.calculateSummary();
  }


  constructor(private serviceService: ServiceService,private clientService: ClientService, builder: FormBuilder ,private toastr: ToastrService, private devisService: DevisService, private router:Router) {
    console.log(this.ddd)
    debugger;
    let devisAddControls = {

      client:new FormControl("",[Validators.required]),
      date_document: new FormControl(""),
      projet: new FormControl(""),
      note:new FormControl(""),
      serviceList:new FormControl("",[Validators.required]),
      etat:new FormControl(""),
      devise: new FormControl (""),
      quantite: new FormControl (1),
      timber: new FormControl (1),

    }
    this.devisAddForm = builder.group(devisAddControls)
  }

  get client() { return this.devisAddForm.get('client') }
  get date_document() { return this.devisAddForm.get('date_document') }
  get projet() { return this.devisAddForm.get('projet') }
  get note() { return this.devisAddForm.get('note') }
  get serviceList() { return this.devisAddForm.get('serviceList') }
  get etat() { return this.devisAddForm.get('etat') }
  get devise() { return this.devisAddForm.get('etat') };
  get quantite() { return this.devisAddForm.get('quantite') };
  get timber() { return this.devisAddForm.get('timber') };


  ngOnInit(): void {
    debugger;
    let date =  new Date();
    this.currentDate = new DatePipe('en-US').transform(date, 'dd/MM/yyyy')

    this.getClients();
    this.getServices();
  }
  
  addForm(){
    debugger
    let ss = {
      lib: '',
      prix: '',
      taxe: '',
      tva: '',
      resultat_ht:'',
      quantite: 1,
      _id: '',
    };
   
    this.productsList.push(ss);
    this.calculateSummary();
    
  }
  removeForm(e,index){
    debugger
    this.productsList.splice(index, 1);

    this.calculateSummary();

    this.totalHt = this.sumHT(this.productsList);
    this.totalHtWithFodec = this.sumHTWithFodec();
    this.totalTVA = this.sumTVA(this.productsListSummary);
    this.totalFODEC =  this.sumFODEC(this.totalHtWithFodec);
    this.totalTTC = this.sumTTC(this.totalHt, this.totalFODEC, this.totalTVA);
    this.totalPayer = this.net_payer(this.totalTTC, this.timbreFiscale);
  
  }

  calculateSummary(){
    this.productsListSummary = [];
    let summary = {
      tva: 0,
      base: 0,
      montant: 0
    }
    this.productsList.forEach(p => {    
      let tva = p.tva;
      let base = p.taxe ===''? p.resultat_ht : p.resultat_ht + (p.resultat_ht * 0.01);
      let montant = (tva * base)/100; 
      summary ={
        tva: tva,
        base: base,
        montant: montant
      }
      this.productsListSummary.push(summary);
    })
  }
  sumHT(list: any[]){
    let sum = 0;
    this.productsList.forEach(p => {
        sum += p.resultat_ht;
    })
    return sum;
  }

  sumHTWithFodec(){
    let sum = 0;
    this.productsList.forEach(p => {
      if(p.taxe !==''){
        sum += p.resultat_ht;
      }
    })
    return sum
  }

  sumHTWithoutFodec(){
    let sum = 0;
    this.productsList.forEach(p => {
      if(p.taxe ===''){
          sum += p.resultat_ht;
      }
    })
    return sum
  }

  sumFODEC(sumHT: number){
    let sum = 0;

      sum += sumHT *0.01;
    
    return sum;
  }

  sumTVA(list: any[]){
    let sum = 0;
    debugger;
    this.productsListSummary.forEach(p => {
      debugger;
      sum += p.montant;
    })
    return sum;
  }

  sumTTC(sumHT: number, sumFODEC: number, sumTVA: number){
    return  sumHT + sumFODEC + sumTVA;
  }

  net_payer(sumTTC: number, timbreFiscale:number){
    return (sumTTC + timbreFiscale );
  }




  addSForm(){
    debugger;
    this.Home=new Home
    this.dataarr.push(this.Home);
  }
  removeSForm(index){
    this.dataarr.splice(index);
  }
  
  addTForm(){
    debugger;
    this.Home=new Home
    this.dataar.push(this.Home);
  }
  removeTForm(index){
    this.dataar.splice(index);
  }





  devisUser() {
    debugger
    let data = this.devisAddForm.value;
    data.service = this.productsList;
    data.summary = this.productsListSummary;
    data.totalHt = this.totalHt;
    data.totalFODEC = this.totalFODEC;
    data.totalTVA = this.totalTVA;
    data.totalTTC = this.totalTTC;
    data.timbreFiscale = this.timbreFiscale;
    data.totalPayer = this.totalPayer;

    let devis = new Devis (data.client, data.date_document, data.projet, data.note, data.service,data.summary,data.totalHt,data.totalFODEC,data.totalTVA,data.totalTTC,data.timbreFiscale,data.totalPayer,data.etat)
  //alert(JSON.stringify(data))
  this.devisService.addDevis(devis).subscribe(
    res => {
      debugger
      console.log("resultat: ",res);
      console.log("id: ",res._id);
      localStorage.setItem('devisId', res._id);
      this.toastr.success(res.message);
      this.etatCree(res._id);
      
      this.devisService.setDevis(devis);
      this.router.navigate(['/dmodifier']);
    }   ,
     error =>{
      alert(JSON.stringify(error));
    }
  )

    
  }

  etatCree(id:string){
    this.devisService.updateETDevis("créé",id).subscribe(
      res => {
        this.router.navigate(['/dmodifier']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }
   
  
  

  

  /*  DownloadPDF() {
     console.log('downloading PDF...');
     const doc = new jsPDF();
     doc.text('Hello',15,15);
     

     doc.save('devis.pdf');
   }  */

    
   
}
