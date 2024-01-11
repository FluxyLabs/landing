import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NoticesComponent } from './notices/notices.component';
import { ComponentsModule } from '../components/components.module';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    HomeComponent,
    CompanyComponent,
    ServicesComponent,
    ContactComponent,
    NoticesComponent,
    PricingComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
