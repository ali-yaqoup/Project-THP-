import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
users: any;
reports: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
constructor(private router: Router) {}

  closeModal() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }
  get isModalOpen(): boolean {
    return location.href.includes('(popup:');
  }
}
