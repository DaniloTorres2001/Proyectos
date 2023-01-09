import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpiesComponent } from './components/cpies/cpies.component';
import { CpiusComponent } from './components/cpius/cpius.component';
import { IpesComponent } from './components/ipes/ipes.component';
import { UnenploymentComponent } from './components/unenployment/unenployment.component';
import { InfoComponent } from './components/info/info.component';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CpiesComponent,
    CpiusComponent,
    IpesComponent,
    UnenploymentComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
