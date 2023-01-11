import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { ForgotPasswordComponent } from './core/components/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes =[
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  
  {
    path:'redefinir-senha',
    component: ForgotPasswordComponent
  },

  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
