import { Component } from '@angular/core';
import { ActivitiesService } from './activities.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(public activitiesService:ActivitiesService) {

   }

   ngOnInit() {

   }
  
}
