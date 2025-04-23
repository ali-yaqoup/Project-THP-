import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users = [
    {
      name: 'Jacob Jones',
      avatar: 'https://i.pravatar.cc/30?img=1',
      type: 'Artisan',
      status: 'Pending',
    },
    {
      name: 'Devon Lane',
      avatar: 'https://i.pravatar.cc/30?img=2',
      type: 'Employer',
      status: 'Active',
    },
    {
      name: 'Darrell Steward',
      avatar: 'https://i.pravatar.cc/30?img=3',
      type: 'Employer',
      status: 'Active',
    },
    {
      name: 'Ralph Edwards',
      avatar: 'https://i.pravatar.cc/30?img=4',
      type: 'Employer',
      status: 'Active',
    }
  ];

  approveUser(user: any) {
    user.status = 'Active';
  }

  rejectUser(user: any) {
    user.status = 'Rejected';
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Active': return 'bg-success text-white';
      case 'Pending': return 'bg-warning text-dark';
      case 'Rejected': return 'bg-danger text-white';
      default: return 'bg-secondary text-white';
    }
  }
}
