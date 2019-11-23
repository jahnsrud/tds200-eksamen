import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {ComponentsModule} from '../../components/components.module';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {RegisterFormComponent} from '../../components/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [LoginPage, LoginFormComponent, RegisterFormComponent]
})
export class LoginPageModule {}
