import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroups , Formcontrol , FormBuilder , Validators 
import { ActivatedRoute} from '@angular/router';
import { Service } from 'src/app/components/service';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-services-update',
  templateUrl: './services-update.component.html',
  styleUrls: ['./services-update.component.css']
})
export class ServicesUpdateComponent implements OnInit {
  filePath:string;
  public imagePath;
  pri:number;
  res:number;
  image:any;
  originPri:number;
  originRes:number;
  originResVate: number = 0;
  TVA: number = 0;
  imgURL: any;
  serviceId: any;
  public message: string;
  servicesUpdateForm: FormGroup;
  preview(files) {
    debugger;
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  constructor(private builder: FormBuilder,private http:HttpClient , private router:Router, private route : ActivatedRoute, private serviceService:ServiceService) {
  }

  
  ngOnInit(): void {
    debugger
    this.servicesUpdateForm = this.builder.group({
      type: ['', null],
      lib: ['', Validators.required],
      categorie: ['', null],
      code: ['', null],
      marque: ['', null],
      description:['', null],
      image: new FormControl(""),
      prix: ['', Validators.required],
      quantite: [1, null],
      tpe: ['', null],
      unite: ['', null],
      tva: ['', null],
      taxe: ['', null],
  });
    this.serviceId =this.route.snapshot.params.id;
    console.log(this.serviceId);
    this.serviceService.getOneService(this.serviceId).subscribe(
      res => {
        debugger
        console.log(res['service']);
        let service=res['service'];
        this.imgURL = service.image;

        this.servicesUpdateForm.patchValue({
          type:service.type,
          lib:service.lib,
          categorie:service.categorie,
          code:service.code,
          marque:service.marque,
          description:service.description,
          prix:service.prix,
          quantite:service.quantite,
          tpe:service.tpe,
          unite:service.unite,
          tva:service.tva,
          taxe:service.taxe,
        })
      },
      err => {
        console.log(err);
      }

    )
  }

  get f(){ return this.servicesUpdateForm.controls}

  changeFn(e) {
    this.pri = e*1000;
    this.res=e*1000;

    this.originPri = this.pri;
    this.originRes = this.res;

    this.changeTVA(this.TVA);
  }


  changeType(e){
    debugger
    console.log(e.target.value);
  }
  changeHT(e){
    debugger
    this.pri = this.originPri 
    if(this.originResVate != 0){
      this.res = this.originResVate;
    }
    this.res
    console.log(e.target.value);
  }
  changeTTC(e){
    debugger
    this.pri = 0;
    this.res = this.originPri;
  }
  changeTVA(e){
    debugger
    this.TVA = e;
    this.res = this.pri + ((this.pri * e)/100);
    this.originResVate = this.res;
  }
  onFileChanged(event:Event){
    debugger
    console.log(event);
    const file=(event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      debugger
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  
  updateService() {
    debugger;
    let data = this.servicesUpdateForm.value;
    data.imgURL = this.imgURL;
    data.serviceId = this.serviceId;
    let service = new Service(data.type, data.lib, data.categorie, data.code, data.marque, data.description, data.imgURL, data.prix,data.quantite, data.tpe,data.unite,data.tva,data.taxe,data.resultat_ht,data.resultat_ttc,data.serviceId)
    //alert(JSON.stringify(data)
    this.serviceService.updateService(service,data.serviceId).subscribe(
      res => {
       debugger 
        this.router.navigate(['/services/list']);
      }   ,
       error =>{
        alert(JSON.stringify(error));
      }
    )
  }

  

}


 