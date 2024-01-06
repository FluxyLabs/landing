import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
