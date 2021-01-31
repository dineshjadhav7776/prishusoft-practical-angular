import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllOrganizationsComponent } from './components/all-organizations/all-organizations.component';
import { AppRoutingModule } from '../app/app.routing.module';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllOrganizationsComponent,
    AddOrganizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
