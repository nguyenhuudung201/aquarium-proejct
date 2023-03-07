import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages.component';
import { FAQComponent } from './faq/faq.component';
import {ClickOutsideModule} from "ng-click-outside";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { EventComponent } from './event/event.component';
import {HttpClientModule} from "@angular/common/http";
import {AnimalComponent} from "./animal/animal.component";
import { AnimalSingeComponent } from './animal-singe/animal-singe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TicketComponent } from './ticket/ticket.component';
import {EventSingleComponent} from "./event-single/event-single.component";
import { BlogSingleComponent } from './blog-single/blog-single.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'services',component:ServicesComponent,title:'Services'},
  {path:'FAQ',component:FAQComponent,title:'FAQ'},
  {path:'Contact',component:ContactComponent,title:'Contact'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'gallery',component:GalleryComponent,title:'Gallery'},
  {path:'blog',component:BlogComponent,title:'Blog'},
  {path:'event',component:EventComponent,title:'Events'},
  {path:'animal',component:AnimalComponent,title:'Animal'},
  {path:'animal-singe/:id',component:AnimalSingeComponent,title:'Animal'},
  {path:'event-single/:id',component:EventSingleComponent,title:'Event'},
  {path:'blog-single/:id',component:BlogSingleComponent,title:'Blog'},
  {path:'ticket',component:TicketComponent,title:'Ticket'},
  {path:'**',component:PagesComponent,title:'Errors'},

];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PagesComponent,
    FAQComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    BlogComponent,
    SinglepostComponent,
    EventComponent,
    AnimalComponent,
    HomeComponent,
    AnimalSingeComponent,
    TicketComponent,
    EventSingleComponent,
    BlogSingleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ClickOutsideModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
