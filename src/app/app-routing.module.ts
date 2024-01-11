import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  } ,
  {
    path : 'notices', 
    component : NoticesComponent
  },
  {
    path: 'services', 
    component: ServicesComponent
  },
  {
    path: 'pricing', 
    component: PricingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
