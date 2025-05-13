import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from "./Admin/admin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AdminComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THP';
}
