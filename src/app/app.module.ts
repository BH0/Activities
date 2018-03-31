import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 


import { AppComponent } from './app.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AddComponent } from './components/add/add.component';

import { ActivitiesService } from './activities.service'; 

const appRoutes: Routes = [ 
  { path: '', component:ActivitiesComponent },
  { path: 'add', component:AddComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    AddComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
