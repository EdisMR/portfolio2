import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    ProjectsComponent,
    AboutmeComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
