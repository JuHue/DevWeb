import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component'
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Liste',component: ListeComponent},
  {path:'Gestion',component: GestionComponent},
  {path: 'Contact', component: ContactComponent},
  {path:'**',redirectTo: ''},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
