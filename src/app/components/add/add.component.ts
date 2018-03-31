import { Component, OnInit } from '@angular/core';

import { ActivitiesService } from '../../activities.service'

@Component({
  selector: 'app-exaddample',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public activitiesService:ActivitiesService) { }

  ngOnInit() { 
    
  } 

  addActivity(name, description) {
    let activity = {
      name: name,
      description: description,
      votes: 0 
    } 
    this.activitiesService.activities.push(activity); 
    return false; 
  }

}
