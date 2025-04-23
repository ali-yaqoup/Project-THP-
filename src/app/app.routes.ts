import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './Admin/manage-users/manage-users.component';
import { JobPostingsComponent } from './Admin/job-postings/job-postings.component';
import { ReportsSectionComponent } from './Admin/reports-section/reports-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'

  },
  {
    path: 'dashboard',
    component: ManageUsersComponent
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    outlet: 'popup'
  },
  {
    path: 'job-postings',
    component: JobPostingsComponent,
    outlet: 'popup'
  },
  {
    path: 'reports-section',
    component: ReportsSectionComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
