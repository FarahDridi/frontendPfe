import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/components/devis';
import { DevisService } from 'src/app/Services/devis.service';


@Component({
  selector: 'app-dnegociation',
  templateUrl: './dnegociation.component.html',
  styleUrls: ['./dnegociation.component.css']
})
export class DnegociationComponent implements OnInit {
  devis: Devis;
  productsList : any[] =[];
  productsListSummary : any[] =[];
  constructor(private devisService: DevisService) { }

  ngOnInit(): void {
    debugger
    this.devis = this.devisService.getDevis();
  }
}