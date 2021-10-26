import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Taxe } from '../components/taxe';
@Injectable({
  providedIn: 'root'
})
export class TaxeService {

  private addTaxeUrl="http://localhost:3000/taxe/add";
  private addTvaUrl="http://localhost:3000/tva/add";
  constructor(private http:HttpClient) { }

  getAllTaxes(){
    let data= this.http.get<any>("http://localhost:3000/taxe/all");
    return data;
  }
  getAllTva(){
    let data= this.http.get<any>("http://localhost:3000/tva/all");
    return data;
  }

  addTaxe(taxe:Taxe){
    return this.http.post<any>(this.addTaxeUrl,taxe);
  }
  addTva(tva:Taxe){
    return this.http.post<any>(this.addTvaUrl,tva);
  }

}
