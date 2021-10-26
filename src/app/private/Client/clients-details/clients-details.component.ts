import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroup, FormControl, FormBuilder, Validators

import { ActivatedRoute} from '@angular/router';
import { Client } from 'src/app/components/client';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  
  public client:any;

  constructor(builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private clientService:ClientService) {
  
  }
  
 
  ngOnInit(): void {
    this.clientsUser();
  }
  clientsUser() {
    let idClient =this.route.snapshot.params.id;
    console.log(idClient);
    this.clientService.getOneClient(idClient).subscribe(
      res => {
        console.log(res['client']);
        let client=res['client'];
        this.client=client;
      },
      err => {
        console.log(err);
      }

    )
  }

  

}


 