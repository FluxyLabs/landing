import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NoticesComponent } from './notices/notices.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    CompanyComponent,
    ServicesComponent,
    ContactComponent,
    NoticesComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }