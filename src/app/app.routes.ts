import { Routes } from '@angular/router';
import { HomeComponent } from './Job-Search-Bidding/home/home.component';
import { LoginComponent } from './Login/login.component';
import { EmailVerificationComponent } from './Login/email-verification/email-verification.component';


import { RegisterComponent } from './Login/register/register.component';
import { HOMEComponent } from './HOME/home.component';
import { JobPostingBiddingComponent } from './job-posting-bidding/job-posting-bidding.component';

import { JobEditeFormComponent } from './job-posting-bidding/job-edite-form/job-edite-form.component';
import { JobBidTableComponent } from './job-posting-bidding/job-bid-table/job-bid-table.component';
import { JobFormComponent } from './job-posting-bidding/job-form/job-form.component';
import { ContactComponent } from './Contact/contact.component';
import { ABUTUSComponent } from './ABUT-US/abut-us.component';
import { ServicesComponent } from './services-page/services.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { ResetPasswordComponent } from './Login/reset-password/reset-password.component';
import { PostingGenertedComponent } from './job-posting-bidding/posting-generted/posting-generted.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { EmailVerificationPendingComponent } from './email-verification-pending/email-verification-pending.component';
import { AdminComponent } from './Admin/admin.component';
import { AdminDashboardComponent } from './Admin/admin-sidebar/admin-dashboard.component';
import { ManageUsersComponent } from './Admin/manage-users/manage-users.component';
import { JobPostingsComponent } from './Admin/job-postings/job-postings.component';
import { ReportsSectionComponent } from './Admin/reports-section/reports-section.component';
import { ReportCardsComponent } from './Admin/report-cards/report-cards.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


export const routes: Routes = [
  {
    path:'',
    component:HOMEComponent,
    children: [
      { path: '', redirectTo: 'section', pathMatch: 'full' },
      { path: 'section', component: HomeComponent },
    ]
  },
  {
    path:'LoginComponent',
    component:LoginComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path:"register", component:RegisterComponent },
      { path:"email-verification", component:EmailVerificationComponent },
 
      { path:"forgot-password", component:ForgotPasswordComponent },
      { path:"login-page", component:LoginPageComponent },
      { path:"reset", component:ResetPasswordComponent },
    ],
  },
  {
    path: 'JobPostingBiddingComponent',
    component: JobPostingBiddingComponent,
    children: [
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: 'post', component: PostingGenertedComponent },
      { path: 'edite/:id', component: JobEditeFormComponent },
      { path: 'bids/:post_id', component: JobBidTableComponent },
      { path: 'form', component: JobFormComponent },
    ],
  },
  {
    path:"email-verification-pending", 
    component: EmailVerificationPendingComponent 
  },
  {
    path:'ABUTUS',
    component: ABUTUSComponent ,
    children: [
      { path: 'about', component:ABUTUSComponent },
    ],
  },
  {
    path:'Contact',
    component: ContactComponent ,
    children: [
      { path: 'contact', component:ContactComponent },
    ],
  },
  {
    path:'Services',
    component: ServicesComponent ,
    children: [
      { path: '', redirectTo: 'services', pathMatch: 'full' },
      { path: 'services', component:ServicesComponent },
    ],
  },
  {
    path: 'jobs',
    component: JobListingsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: JobListingsComponent },
    ],
  },

 

  {
    path: 'admin-dashboard',
    component: AdminComponent
  }

];