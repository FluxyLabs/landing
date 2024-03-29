import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CountUpDirective } from '../count-up.directive';
import { BlogComponent } from './blog/blog.component';
import { PricingPreviewComponent } from './pricing-preview/pricing-preview.component';
import { ServicesMenuComponent } from './services-menu/services-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent,
    MobileMenuComponent,
    CountUpDirective,
    BlogComponent,
    PricingPreviewComponent,
    ServicesMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent,
    BlogComponent,
    PricingPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
