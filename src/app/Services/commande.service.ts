import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Commande } from '../components/commande';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

private getOneCommandeUrl="http://localhost:3000/commande/one/"
private addCommandeUrl="http://localhost:3000/commande/add";
private deleteCommandeUrl="http://localhost:3000/commande/remove/";

commande :Commande;

  constructor(private http:HttpClient) { }

  getAllCommandes(){
    let data= this.http.get<any>("http://localhost:3000/commande/all");
    return data;
  }
  

  getOneCommande(id:String){
    return this.http.get<any>(this.getOneCommandeUrl+id);
   }
  
  addCommande(commande:Commande){
    return this.http.post<any>(this.addCommandeUrl,Commande);
  }

  deleteCommande(id:String){
    return this.http.delete<any>(this.deleteCommandeUrl+id)
  }

  setCommande(commande: Commande){
    this.commande = commande;
  }

  getCommande(): Commande{
    return this.commande;
  }

}
