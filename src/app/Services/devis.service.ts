import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Devis } from '../components/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  
private getOneDevisUrl="http://localhost:3000/devis/one/"
private UpdateETDevisUrl="http://localhost:3000/devis/update_etat/";
private updateDevisUrl="http://localhost:3000/devis/update_info/"
private addDevisUrl="http://localhost:3000/devis/add";
private deleteDevisUrl="http://localhost:3000/devis/remove/";

devis :Devis;

  constructor(private http:HttpClient) { }

  getAllDevis(){
    let data= this.http.get<any>("http://localhost:3000/devis/all");
    return data;
  }
  

  getOneDevis(id:String){
    return this.http.get<any>(this.getOneDevisUrl+id);
   }
  
  addDevis(devis:Devis){
    return this.http.post<any>(this.addDevisUrl,devis);
  }

  updateETDevis(etat:string,_id:string){
    return this.http.put<any>(this.UpdateETDevisUrl+_id,{"etat":etat});
  }
 
  updateDevis(devis:Devis, id:string){
    return this.http.put<any>(this.updateDevisUrl+id,devis);
  }

  deleteDevis(id:String){
    return this.http.delete<any>(this.deleteDevisUrl+id)
  }

  setDevis(devis: Devis){
    this.devis = devis;
  }

  getDevis(): Devis{
    return this.devis;
  }

}
