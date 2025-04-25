import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-job-posting-bidding',
  imports: [RouterOutlet,HeaderComponent,FooterComponent ],
  templateUrl: './job-posting-bidding.component.html',
 
})
export class JobPostingBiddingComponent {

}
