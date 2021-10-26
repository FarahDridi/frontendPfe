import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './navservices/login.component';
import { RegisterComponent } from './navcontact/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { SidebarComponent } from './private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './private/shared/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UsersAddComponent } from './private/Utilisateur/users-add/users-add.component';
import { UsersUpdateComponent } from './private/Utilisateur/users-update/users-update.component';
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
import { DreactiverComponent } from './private/Devis/dreactiver/dreactiver.component';
import { DmodifierComponent } from './private/Devis/dmodifier/dmodifier.component';
import { DnegociationComponent } from './private/Devis/dnegociation/dnegociation.component';
import { DaccepterComponent } from './private/Devis/daccepter/daccepter.component';
import { DannulerComponent } from './private/Devis/dannuler/dannuler.component';
import { FmodifierComponent } from './private/Facture/fmodifier/fmodifier.component';
import { FannulerComponent } from './private/Facture/fannuler/fannuler.component';
import { FreactiverComponent } from './private/Facture/freactiver/freactiver.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule} from "@angular/common/http";
import { BordComponent } from './bord/bord.component' ;

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TaxeTvaComponent } from './private/taxe-tva/taxe-tva.component';
import { FournisseursListComponent } from './private/Fournisseur/fournisseurs-list/fournisseurs-list.component';
import { FournisseurAddComponent } from './private/Fournisseur/fournisseur-add/fournisseur-add.component';
import { FournisseurUpdateComponent } from './private/Fournisseur/fournisseur-update/fournisseur-update.component';
import { FournisseurDetailsComponent } from './private/Fournisseur/fournisseur-details/fournisseur-details.component';
import { CommandesListComponent } from './private/Commande Client/commandes-list/commandes-list.component';
import { CommandesAddComponent } from './private/Commande Client/commandes-add/commandes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    ClientsListComponent,
    ClientsAddComponent,
    ClientsUpdateComponent,
    ServicesListComponent,
    ServicesAddComponent,
    ServicesUpdateComponent,
    FacturesListComponent,
    FacturesAddComponent,
    DevisListComponent,
    DevisAddComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersUpdateComponent,
    ClientsDetailsComponent,
    ServicesDetailsComponent,
    CogentComponent,
    CogdocComponent,
    PasswordComponent,
    CogentmodiComponent,
    DocdevisComponent,
    DocfactureComponent,
    ProfileComponent,
    ConditionComponent,
    DreactiverComponent,
    DmodifierComponent,
    DnegociationComponent,
    DaccepterComponent,
    DannulerComponent,
    FmodifierComponent,
    FannulerComponent,
    FreactiverComponent,
    SignupComponent,
    SigninComponent,
    BordComponent,
    TaxeTvaComponent,
    FournisseursListComponent,
    FournisseurAddComponent,
    FournisseurUpdateComponent,
    FournisseurDetailsComponent,
    CommandesListComponent,
    CommandesAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
