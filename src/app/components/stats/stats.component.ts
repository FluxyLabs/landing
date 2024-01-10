import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  totalUsers = 35000; 
  totalPropertys = 14000; 
  totalCoPropertys = 235; 
}
