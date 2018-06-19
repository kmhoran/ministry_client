import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MarkdownOptionsFactory } from '../app/shared/MarkdownOptionsFactory';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { NavigationComponent } from './shared/navigation.component';
import { OurConferenceComponent } from './about/our-conference.component';
import { HistoryComponent } from './about/history.component';
import { PastEventsComponent } from './about/past-events.component';
import { GalleryComponent } from './about/gallery.component';
import { WishListComponent } from './about/wish-list.component';
import { ArchDioceseComponent } from './resources/arch-diocese.component';
import { LaCountyComponent } from './resources/la-county.component';
import { CulverCityComponent } from './resources/culver-city.component';
import { SavesComponent } from './resources/saves.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScheduleComponent,
    ContactComponent,
    ResourcesComponent,
    NavigationComponent,
    OurConferenceComponent,
    HistoryComponent,
    PastEventsComponent,
    GalleryComponent,
    WishListComponent,
    ArchDioceseComponent,
    LaCountyComponent,
    CulverCityComponent,
    SavesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: MarkdownOptionsFactory,
      },
    }),
    RouterModule.forRoot([
      {path: 'about/our-conference', component: OurConferenceComponent},
      {path: 'about/history', component: HistoryComponent},
      {path: 'about/past-events', component: PastEventsComponent},
      {path: 'about/gallery', component: GalleryComponent},
      {path: 'about/wish-list', component: WishListComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'resources/culver-city', component: CulverCityComponent},
      {path: 'resources/la-county', component: LaCountyComponent},
      {path: 'resources/arch-diocese', component: ArchDioceseComponent},
      {path: 'resources/saves', component: SavesComponent},
      {path: '', redirectTo: 'about/our-conference', pathMatch: 'full'},
      {path: '**', redirectTo: 'about/our-conference', pathMatch: 'full'}
    ], {useHash: true})
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
