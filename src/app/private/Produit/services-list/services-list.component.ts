import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  public services: any [] = [];
  serviceDelete;
  servicesList:any[]=[];
  

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  deleteRow(event) {
    this.serviceDelete = event;
  } 

  delete(){
    let index = this.servicesList.indexOf(this.serviceDelete);
    this.servicesList.splice(index,1);
    this.serviceService.deleteService(this.serviceDelete._id).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }
  
   )
   document.getElementById("closeModalButton").click();
  }

  getAllServices(){
    this.servicesList=[];

    this.serviceService.getAllServices().subscribe(
      result =>{
        this.servicesList=result;
        this.services = result;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  filter(value) {
    console.log(value);
    if (value != null || value != '' ) {
      this.servicesList=[];
      this.servicesList = this.services.filter((ct) => { 
        return ct.lib.toLowerCase().includes(value.toLowerCase())
      })
    } else{
      this.servicesList=[];
      this.servicesList=this.services;
    }
    
  }

}
