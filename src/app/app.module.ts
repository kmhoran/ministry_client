import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { NavigationComponent } from './shared/navigation.component';
import { OurConferenceComponent } from './about/our-conference.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    ContactComponent,
    ResourcesComponent,
    NavigationComponent,
    OurConferenceComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forRoot([
      {path: 'about/our-conference', component: OurConferenceComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: '', redirectTo: 'about/our-conference', pathMatch: 'full'},
      {path: '**', redirectTo: 'about/our-conference', pathMatch: 'full'}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
