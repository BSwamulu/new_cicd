import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Build1Component } from './build1/build1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NightComponent } from './night/night.component';
import { PrivateComponent } from './private/private.component';
import { Build2Component } from './build2/build2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NightSidebarComponent } from './night-sidebar/night-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    Build1Component,
    NightComponent,
    PrivateComponent,
    Build2Component,
    DropdownComponent,
    NightSidebarComponent
  ],
  imports: [
    BrowserModule,
    DropDownButtonModule,
    AppRoutingModule,MatIconModule,
    AngularFontAwesomeModule,
     HttpClientModule,NgbModule,
     BrowserAnimationsModule, ReactiveFormsModule,MatSelectModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
