import { Component, OnInit, ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';
import { TaxeService } from 'src/app/Services/taxe.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-taxe-tva',
  templateUrl: './taxe-tva.component.html',
  styleUrls: ['./taxe-tva.component.css']
})
export class TaxeTvaComponent implements OnInit {
  @ViewChild('viewModal')modal:any;
  isUpdate:boolean = false;
  public taxes: any [] = [];
  taxe:any;
  taxesList:any[]=[];
  tvaList:any[]=[];
  dialog: any;
  isPopupOpened: boolean;

  constructor(private taxeService:TaxeService,private router: Router,private http: HttpClient,private route: ActivatedRoute) { }
  loadTaxeList(){
    this.taxeService.getAllTaxes().subscribe(
      result => {
        console.log(result);
        this.taxesList = result;
      },
      error => {
        console.log(error);
      }
    )
  } 
  loadTvaList(){
    this.taxeService.getAllTva().subscribe(
      result => {
        console.log(result);
        this.tvaList = result;
      },
      error => {
        console.log(error);
      }
    )
  } 
  ngOnInit(): void {
    this.loadTaxeList();
    this.loadTvaList();
  }


  ajout(){
    console.log("added");
 
}
}
