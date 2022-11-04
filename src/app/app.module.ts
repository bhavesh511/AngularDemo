import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
//import { UserComponent } from './user/user.component';
//import { StudentComponent } from './student/student.component';
//import { CountryComponent } from './country/country.component';

import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { PipeDemoPipe } from './pipes/pipe-demo.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ChildComponent,
    PipeDemoPipe,
    ErrorPageComponent,
    //UserComponent,
    //StudentComponent,
    //CountryComponent

  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    //HttpClientModule,
    //NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

}
