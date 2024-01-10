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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent,
    MobileMenuComponent,
    CountUpDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
