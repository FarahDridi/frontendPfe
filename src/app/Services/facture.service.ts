import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Facture } from '../components/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private addFactureUrl="http://localhost:3000/facture/add";
  private UpdateETFactureUrl="http://localhost:3000/facture/update_etat/";
  private deleteFactureUrl="http://localhost:3000/facture/remove/";
  private getOneFactureUrl="http://localhost:3000/facture/one/";
  private updateFactureUrl="http://localhost:3000/facture/update_info/";

  constructor(private http:HttpClient) { }

  getAllFactures(){
    let data= this.http.get<any>("http://localhost:3000/facture/all");
    return data;
  }
  
  addFacture(facture:Facture){
    return this.http.post<any>(this.addFactureUrl,facture);
  }

  updateETFacture(etat:string,_id:string){
    return this.http.put<any>(this.UpdateETFactureUrl+_id,{"etat":etat});
  }
  
  deleteFacture(id:String){
    return this.http.delete<any>(this.deleteFactureUrl+id)
  }

  getAllFacturearchive(){
    let data= this.http.get<any>("http://localhost:3000/facture/archive");
    return data;
  }

  getOneFacture(id:String){
    return this.http.get<any>(this.getOneFactureUrl+id);
   }
 
  updateFacture(facture:Facture, id:string){
    return this.http.put<any>(this.updateFactureUrl+id,facture);
  }

}


  
  
 

