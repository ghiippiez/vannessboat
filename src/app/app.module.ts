import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadComponent } from './upload/upload.component';
import { CreateComponent } from './create/create.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FolderComponent } from './folder/folder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from '@angular/common' ;
import { FormsModule } from '@angular/forms';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';


const appRoutes: Routes = [{ path: '', component: HomeComponent },
{ path: 'upload', component: UploadComponent },
{ path: 'calendar', component:CalendarComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    UploadComponent,
    CreateComponent,
    CalendarComponent,
    FolderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    BrowserAnimationsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
