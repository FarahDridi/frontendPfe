import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// FormGroups , Formcontrol , FormBuilder , Validators 
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService} from 'src/app/Services/service.service';
import { Service } from 'src/app/components/service';

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.css']
})
export class ServicesAddComponent implements OnInit {
  public servicesAddForm: FormGroup;
  pri:number;
  res:number;
  image:any;
  originPri:number;
  originRes:number;
  originResVate: number = 0;
  TVA: number = 0;
  filePath:string;
  serviceId: any;
  public imagePath;
  imgURL: any;
  public message: string;
 
  flag: any;
  preview(files) {
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

    this.flag = "ht";
  }
  ngOnInit(): void {
    this.servicesAddForm = this.builder.group({
      type: ['', null],
      lib: ['', Validators.required],
      categorie: ['', null],
      code: ['', null],
      marque: ['', null],
      description:['', null],
      image: new FormControl(""),
      prix: ['', Validators.required],
      quantite: [1,null],
      tpe: ['', null],
      unite: ['', null],
      tva: ['', null],
      taxe: ['', null],
  });
}
get f(){ return this.servicesAddForm.controls}


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
    console.log(event);
    const file=(event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

 
  serviceUser() {
    debugger
    console.log('test');
    let data = this.servicesAddForm.value;
    data.resultat_ht = this.pri;
    data.resultat_ttc = this.res;
    data.imgURL = this.imgURL;
  
  let service = new Service(data.type, data.lib, data.categorie, data.code, data.marque, data.description,data.imgURL, data.prix,data.quantite,data.tpe,data.unite, data.tva, data.taxe, data.resultat_ht, data.resultat_ttc, data._id)
  //alert(JSON.stringify(data))
  console.log(service);
   this.serviceService.addService(service).subscribe(
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
