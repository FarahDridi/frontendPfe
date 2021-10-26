import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { ActivatedRoute} from '@angular/router';
import { Service } from 'src/app/components/service';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {
  pri:number;
  res:number;
  resultat_ttc: any;
  resultat_ht: any;

  public service:any;

  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private serviceService:ServiceService) {
  
  }
  
 
  ngOnInit(): void {
    this.servicesUser();
  }
  servicesUser() {
    let idService =this.route.snapshot.params.id;
    console.log(idService);
    this.serviceService.getOneService(idService).subscribe(
      res => {
        console.log(res['service']);
        let service=res['service'];
        this.service=service;
        this.resultat_ht = service.resultat_ht;
        this.resultat_ttc = service.resultat_ttc;

      },
      err => {
        console.log(err);
      }

    )
  }

  

}


 