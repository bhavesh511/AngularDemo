import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { BasicFormComponent } from './user-auth/basic-form/basic-form.component';
import { LoginComponent } from './user-auth/login/login.component';
//import { ErrorPageComponent } from './error-page/error-page.component';
import { AddDataComponent } from './user-auth/add-data/add-data.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'getExam',
    component: BasicFormComponent
  },
  {
    path: 'home',
    component: RegisterComponent
  },
  // {
  //   path: '**',
  //   component: ErrorPageComponent
  // },
  {
    path: "addExam",
    component: AddDataComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
