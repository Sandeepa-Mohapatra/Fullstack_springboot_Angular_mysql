import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ImpelsyslibraryComponent } from './impelsyslibrary/impelsyslibrary.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllUsersComponent,
    RegisterComponent,
    SearchComponent,
    FooterComponent,
    ImpelsyslibraryComponent,
    LoginComponent,
    UpdatecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
