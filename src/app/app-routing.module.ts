import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './Component/Admin/manage-users/manage-users.component';
import { JobPostingsComponent } from './Component/Admin/job-postings/job-postings.component';


const routes: Routes = [
  { path: '', redirectTo: 'manage-users', pathMatch: 'full' },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'job-postings', component: JobPostingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
