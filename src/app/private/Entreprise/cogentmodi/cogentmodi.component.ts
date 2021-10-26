import { Component, OnInit } from '@angular/core';
import JWT from "jwt-decode";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/components/user';

@Component({
  selector: 'app-cogentmodi',
  templateUrl: './cogentmodi.component.html',
  styleUrls: ['./cogentmodi.component.css']
})
export class CogentmodiComponent implements OnInit {
    public cogmodiForm: FormGroup;
  
    constructor(builder: FormBuilder, private userService: UserService, private router: Router, private http:HttpClient,private route : ActivatedRoute) {
      let cogmodiControls = {
  
        ent: new FormControl(""),
        email: new FormControl("",[
          Validators.required
        ]),
        prenom: new FormControl(""),
        nom: new FormControl(""),
        num: new FormControl(""),
        mobile: new FormControl(""),
        site: new FormControl(""),
        matricule: new FormControl(""),
        devise: new FormControl(""),
        adresse: new FormControl(""),
        ville: new FormControl(""),
        code_postal: new FormControl(""),
        pays: new FormControl("")
      }
      this.cogmodiForm = builder.group(cogmodiControls)
    }
  
    get ent() { return this.cogmodiForm.get('ent') }
    get email() { return this.cogmodiForm.get('email') }
    get prenom() { return this.cogmodiForm.get('prenom') }
    get nom() { return this.cogmodiForm.get('nom') }
    get num() { return this.cogmodiForm.get('num') }
    get mobile() { return this.cogmodiForm.get('mobile') }
    get site() { return this.cogmodiForm.get('site') }
    get matricule() { return this.cogmodiForm.get('matricule') }
    get devise() { return this.cogmodiForm.get('devise') }
    get adresse() { return this.cogmodiForm.get('adresse') }
    get ville() { return this.cogmodiForm.get('ville') }
    get code_postal() { return this.cogmodiForm.get('code_postal') }
    get pays() { return this.cogmodiForm.get('pays') }

    ngOnInit(): void {
      let token = localStorage.getItem("mytoken");
      let t = JWT(token);
      const data = JSON.parse(JSON.stringify(t));
      console.log(typeof t)
      const id = data.id
      console.log(typeof data)
      console.log(id);
      this.http.get<any>('http://localhost:3000/user/currentUser/' + id).subscribe(
        (result) => {
          console.log(result._id);
          const data = JSON.parse(JSON.stringify(result))
          this.cogmodiForm.patchValue({
            
            ent: data.ent,
            email: data.email,
            prenom: data.prenom, 
            nom: data.nom
          });
        },
        (error) => {
          console.log(error);
        }
      )
      
  

    let idUser =this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getOneUser(idUser).subscribe(
      res => {
        console.log(res);
        let user=res;
        this.cogmodiForm.patchValue({
          nom:user.nom,
          prenom:user.prenom,
          email:user.email,
          ent:user.ent,
          num:user.num,
          mobile:user.mobile,
          site:user.site,
          matricule:user.matricule,
          devise:user.devise,
          adresse:user.adresse,
          ville:user.ville,
          code_postal:user.code_postal,
          pays:user.pays
        })
      },
      err => {
        console.log(err);

      }
    )
    }


      updateUser() {
        let data = this.cogmodiForm.value;
        let user = new User(data.nom, data.prenom, data.email, data.password, data.num, data.target,data.ent,data.role,data._id,data.mobile,data.site,data.matricule,data.devise,data.adresse,data.ville,data.code_postal,data.pays)
        //alert(JSON.stringify(data)
        this.userService.updateUser(user,user._id).subscribe(
          res => {
            
            this.router.navigate(['/cogent']);
          }   ,
           error =>{
            alert(JSON.stringify(error));
          }
        )
      }

  
  }