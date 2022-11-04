import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDataComponent } from './add-data/add-data.component';


@NgModule({
  declarations: [
    LoginComponent,
    BasicFormComponent,
    AddDataComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [UserAuthModule],
  exports: [
    LoginComponent,
    BasicFormComponent,
    AddDataComponent,
  ]
})
export class UserAuthModule {

}
