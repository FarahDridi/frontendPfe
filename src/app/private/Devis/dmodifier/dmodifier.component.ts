import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/components/devis';
import { DevisService } from 'src/app/Services/devis.service';

@Component({
  selector: 'app-dmodifier',
  templateUrl: './dmodifier.component.html',
  styleUrls: ['./dmodifier.component.css']
})
export class DmodifierComponent implements OnInit {

  devis: Devis;
  productsList : any[] =[];
  productsListSummary : any[] =[];
  constructor(private devisService: DevisService) { }

  ngOnInit(): void {
    debugger
    this.devis = this.devisService.getDevis();
  }

}
