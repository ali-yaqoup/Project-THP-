import { Component } from '@angular/core';
import { JobListingsComponent } from "./job-listings/job-listings.component";
import { AdminComponent } from "./Admin/admin.component";
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { RegisterComponent } from './Login/register/register.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent,LoginPageComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
