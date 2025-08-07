import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}



  logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.router.navigate(['/section']);
}


  goTo(path: string) {
    this.router.navigate([path]);
  }
}
