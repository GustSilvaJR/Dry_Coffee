import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

//Componentes
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginFooterComponent } from './components/auth/shared/login-footer/login-footer.component';
import { SignInService } from './services/signIn/sign-in.service';
import { ForgotPassService } from './services/forgotPass/forgot-pass.service';






@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    LoginFooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    JwtModule.forRoot({
      config:{
        allowedDomains:["http://localhost:8000"],
      }
    })  
  ],
  providers:[
    SignInService,
    ForgotPassService,
  ]
})
export class CoreModule { }
