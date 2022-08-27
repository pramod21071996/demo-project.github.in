import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume-viewer', component: ResumeViewerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
      ResumeViewerComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
