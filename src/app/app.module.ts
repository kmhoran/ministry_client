import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    ContactComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: '', redirectTo: 'about', pathMatch: 'full'},
      {path: '**', redirectTo: 'about', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
