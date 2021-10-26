import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Service } from '../components/service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private addServiceUrl = "http://localhost:3000/service/add";
  private getOneServiceUrl = "http://localhost:3000/service/one/"
  private deleteServiceUrl = "http://localhost:3000/service/remove/"
  private updateServiceUrl="http://localhost:3000/service/update_info/"
  constructor(private http: HttpClient) { }


  getAllServices() {
    let data = this.http.get<any>("http://localhost:3000/service/all");
    return data;
  }

  getOneService(id: String) {
    return this.http.get<any>(this.getOneServiceUrl + id);
  }


  addService(service: Service) {
    return this.http.post<any>(this.addServiceUrl, service);
  
  }

  deleteService(id: String) {
    return this.http.delete<any>(this.deleteServiceUrl + id)
  }

  updateService(service:Service, id:string){
    return this.http.put<any>(this.updateServiceUrl+id,service);
  }
  

}
