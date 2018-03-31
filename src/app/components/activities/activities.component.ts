import { Component, OnInit } from '@angular/core';

import { ActivitiesService } from '../../activities.service'; 

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit { 
  highestVotedActivityOutput:HighestVotedActivityOutput; 
  highestVote:number; 

  constructor(public activitiesService:ActivitiesService) { }

  ngOnInit() { 
   this.highestVotedActivityOutput = {name:'', description:'', votes: 0};
   this.highestVote = 0; 
  }
  
  highestVotedActivity() {
    let activities  = this.activitiesService.activities.map(activity => activity.votes);
    let max = Math.max(...activities); 

    this.activitiesService.activities.forEach((activity, i) => {
      if (activity.votes == max) {
        this.highestVotedActivityOutput = activity; 
      } 
    }); 
  }

  increaseVotes(activityParam) {
    this.activitiesService.activities.forEach(activity => { 
       if (activity == activityParam) { 
          activity.votes += 1; 
       } 
    }); 
    this.highestVotedActivity(); 
  } 

  deleteActivity(activityParam) {
    this.activitiesService.activities.forEach((activity, i) => { 
       if (activity == activityParam) { 
          this.activitiesService.activities.splice(i, 1); 
       } 
    }); 
  }
} 

interface HighestVotedActivityOutput {
  name:string,
  description:string,
  votes:number 
} 
