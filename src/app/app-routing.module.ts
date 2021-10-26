import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './navservices/login.component';
import { RegisterComponent } from './navcontact/register.component';
import { ClientsListComponent } from './private/Client/clients-list/clients-list.component';
import { ClientsAddComponent } from './private/Client/clients-add/clients-add.component';
import { ClientsUpdateComponent } from './private/Client/clients-update/clients-update.component';
import { ServicesListComponent } from './private/Produit/services-list/services-list.component';
import { ServicesAddComponent } from './private/Produit/services-add/services-add.component';
import { ServicesUpdateComponent } from './private/Produit/services-update/services-update.component';
import { FacturesListComponent } from './private/Facture/factures-list/factures-list.component';
import { FacturesAddComponent } from './private/Facture/factures-add/factures-add.component';
import { DevisListComponent } from './private/Devis/devis-list/devis-list.component';
import { DevisAddComponent } from './private/Devis/devis-add/devis-add.component';
import { UsersListComponent } from './private/Utilisateur/users-list/users-list.component';
import { UsersUpdateComponent } from './private/Utilisateur/users-update/users-update.component';
import { UsersAddComponent } from './private/Utilisateur/users-add/users-add.component';
import { ClientsDetailsComponent } from './private/Client/clients-details/clients-details.component';
import { ServicesDetailsComponent } from './private/Produit/services-details/services-details.component';
import { CogentComponent } from './private/Entreprise/cogent/cogent.component';
import { CogdocComponent } from './private/Document/cogdoc.component';
import { PasswordComponent } from './signin/password/password.component';
import { CogentmodiComponent } from './private/Entreprise/cogentmodi/cogentmodi.component';
import { DocdevisComponent } from './private/Document/docdevis/docdevis.component';
import { DocfactureComponent } from './private/Document/docfacture/docfacture.component';
import { ProfileComponent } from './private/profile/profile.component';
import { ConditionComponent } from './signup/condition/condition.component';
import { DmodifierComponent } from './private/Devis/dmodifier/dmodifier.component';
import { DnegociationComponent } from './private/Devis/dnegociation/dnegociation.component';
import { DaccepterComponent } from './private/Devis/daccepter/daccepter.component';
import { DannulerComponent } from './private/Devis/dannuler/dannuler.component';
import { DreactiverComponent } from './private/Devis/dreactiver/dreactiver.component';
import { FmodifierComponent } from './private/Facture/fmodifier/fmodifier.component';
import { FannulerComponent } from './private/Facture/fannuler/fannuler.component';
import { FreactiverComponent } from './private/Facture/freactiver/freactiver.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './guard/auth.guard';
import { BordComponent } from './bord/bord.component';
import { TaxeTvaComponent } from './private/taxe-tva/taxe-tva.component';
import { FournisseursListComponent } from './private/Fournisseur/fournisseurs-list/fournisseurs-list.component';
import { FournisseurAddComponent } from './private/Fournisseur/fournisseur-add/fournisseur-add.component';
import { FournisseurDetailsComponent } from './private/Fournisseur/fournisseur-details/fournisseur-details.component';
import { FournisseurUpdateComponent } from './private/Fournisseur/fournisseur-update/fournisseur-update.component';
import { CommandesListComponent } from './private/Commande Client/commandes-list/commandes-list.component';
import { CommandesAddComponent } from './private/Commande Client/commandes-add/commandes-add.component';


const routes: Routes = [
  {
    path:"navservices",
    component:LoginComponent
  },
  {
    path:"navcontact",
    component:RegisterComponent
  },
  {
    path:"landing-page",
    component:LandingPageComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"clients/list",
    component:ClientsListComponent
  },
  {
    path:"clients/add",
    component:ClientsAddComponent
  },
  {
    path:"clients/details/:id",
    component:ClientsDetailsComponent
  },
  {
    path:"clients/update/:id",
    component:ClientsUpdateComponent
  },
  {
    path:"services/list",
    component:ServicesListComponent
  },
  {
    path:"services/add",
    component:ServicesAddComponent
  },
  {
    path:"services/details/:id",
    component:ServicesDetailsComponent
  },
  {
    path:"services/update/:id",
    component:ServicesUpdateComponent
  },
  {
    path:"factures/list",
    component:FacturesListComponent
  },
  {
    path:"factures/add",
    component:FacturesAddComponent
  },
  {
    path:"devis/list",
    component:DevisListComponent
  },
  {
    path:"devis/add",
    component:DevisAddComponent
  },
  
  {
    path:"commandes/list",
    component:CommandesListComponent
  },
  {
    path:"commandes/add",
    component:CommandesAddComponent
  },
  {
    path:"users/list",
    component:UsersListComponent
  },
  {
    path:"users/add",
    component:UsersAddComponent
  },
  {
    path:"users/update/:id",
    component:UsersUpdateComponent
  },
  {
    path:"cogent",
    component:CogentComponent
  },
  {
    path:"cogdoc",
    component:CogdocComponent
  },
  {
    path:"password",
    component:PasswordComponent
  },
  {
    path:"cogentmodi/:id",
    component:CogentmodiComponent
  },
  {
    path:"docdevis",
    component:DocdevisComponent
  },
  {
    path:"docfacture",
    component:DocfactureComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"condition",
    component:ConditionComponent
  },
  {
    path:"dmodifier",
    component:DmodifierComponent
  },
  {
    path:"dnegociation",
    component:DnegociationComponent
  },
  {
    path:"daccepter",
    component:DaccepterComponent
  },
  {
    path:"dannuler",
    component:DannulerComponent
  },
  {
    path:"dreactiver",
    component:DreactiverComponent
  },
  {
    path:"fmodifier",
    component:FmodifierComponent
  },
  {
    path:"fannuler",
    component:FannulerComponent
  },
  {
    path:"freactiver",
    component:FreactiverComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"bord",
    component:BordComponent
  },
  {
    path:"taxe_tva",
    component:TaxeTvaComponent
  },
  {
    path:"fournisseurs/list",
    component:FournisseursListComponent
  },
  {
    path:"fournisseurs/add",
    component:FournisseurAddComponent
  },
  {
    path:"fournisseurs/details/:id",
    component:FournisseurDetailsComponent
  },
  {
    path:"fournisseurs/update/:id",
    component:FournisseurUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
