
import { Routes } from '@angular/router';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { ErrorComponent } from './Component/error/error.component';
import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { AboutUsPageComponent } from './Component/about-us-page/about-us-page.component';
import { ServicesPageComponent } from './Component/services-page/services-page.component';
import { ContactPageComponent } from './Component/contact-page/contact-page.component';

export const routes: Routes = [

{path:"login-page",component:LoginPageComponent},
{path:"error",component:ErrorComponent},
{path:"email-verification",component:EmailVerificationComponent},
{path:"forgot-password",component:ForgotPasswordComponent},
{path:"register",component:RegisterComponent},
{path:"reset-password",component:ResetPasswordComponent},
{path:"home-page",component:HomePageComponent},
{path:"about-us-page",component:AboutUsPageComponent},
{path:"servicse-page",component:ServicesPageComponent},
{path:"contact-page",component:ContactPageComponent}
];