import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  
  public clients: any [] = []
  clientDelete;
  clientsList:any[]=[];

  

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  deleteRow(event) {
    this.clientDelete = event;
} 
delete(){
  let index = this.clientsList.indexOf(this.clientDelete);
  this.clientsList.splice(index,1);
  this.clientService.deleteClient(this.clientDelete._id).subscribe(
   res => {
     console.log(res);
   },
   err => {
     console.log(err);
   }

 )
 document.getElementById("closeModalButton").click();
}




  getAllClients(){
    this.clientsList=[];

    this.clientService.getAllClients().subscribe(
      result =>{
        this.clientsList=result;
        this.clients = result;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  

  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.clientsList=[];
      this.clientsList = this.clients.filter((ct) => { 
        return ct.nom.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.clientsList=[];
      this.clientsList=this.clients;
    }
    
  }


}
