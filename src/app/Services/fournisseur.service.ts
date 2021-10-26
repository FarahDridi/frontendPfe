import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Fournisseur } from '../components/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  
private addFournisseurUrl="http://localhost:3000/fournisseur/add";
private getOneFournisseurUrl="http://localhost:3000/fournisseur/one/"
private updateFournisseurUrl="http://localhost:3000/fournisseur/update_info/"
private deleteFournisseurUrl="http://localhost:3000/fournisseur/remove/"
constructor(private http:HttpClient) { }


getAllFournisseurs(){
  let data= this.http.get<any>("http://localhost:3000/fournisseur/all");
  return data;
}
getOneFournisseur(id:String){
 return this.http.get<any>(this.getOneFournisseurUrl+id);
}


addFournisseur(fournisseur:Fournisseur){
  return this.http.post<any>(this.addFournisseurUrl,fournisseur);
}

updateFournisseur(fournisseur:Fournisseur, id:string){
  return this.http.put<any>(this.updateFournisseurUrl+id,fournisseur);
}

deleteFournisseur(id:String){
  return this.http.delete<any>(this.deleteFournisseurUrl+id)
}



}