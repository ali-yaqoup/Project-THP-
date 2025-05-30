import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  allUsers: any[] = [];
  users: any[] = [];
  selectedType = '';

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data;
        this.users = data;

      },

      error: (err) => {
        console.error('Error loading users:', err);
      }
    });

  }

  deleteUser(userId: number): void {
    this.jobService.deleteUser(userId).subscribe({
      next: () => {
        this.allUsers = this.allUsers.filter(u => u.id !== userId);
        this.filterUsers(); 
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }

  filterUsers(): void {
    this.users = this.selectedType
      ? this.allUsers.filter(u => u.user_type === this.selectedType)
      : [...this.allUsers];
  }

  updateStatus(userId: number, status: string): void {
  this.jobService.updateUserStatus(userId, status).subscribe({
    next: () => {
      const user = this.allUsers.find(u => u.id === userId);
      if (user) user.status = status;
      this.filterUsers();
    },
    error: (err) => {
      console.error('Failed to update status:', err);
    }
  });
}
saveUserChanges(user: any): void {
  this.jobService.updateUser(user.id, {
    full_name: user.full_name,
    user_type: user.user_type
  }).subscribe({
    next: () => {
      console.log(' User updated successfully');
      alert(' User updated successfully');
    },
    error: (err) => {
      console.error(' Failed to update user:', err);
      alert(' Failed to update user');
    }
  });
}


}


