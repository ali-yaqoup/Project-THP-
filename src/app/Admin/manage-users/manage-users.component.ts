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


  private readonly roleMap: { [key: string]: number } = {
    'admin': 2,
    'artisan': 3,
    'job_owner': 1,
  };

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = this.sortUsers(data);
        this.users = [...this.allUsers];
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
    const filtered = this.selectedType
      ? this.allUsers.filter(u => u.user_type === this.selectedType)
      : [...this.allUsers];

    this.users = this.sortUsers(filtered);
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
    const updatedRoleId = this.roleMap[user.user_type];
    this.jobService.updateUser(user.id, {
      full_name: user.full_name,
      user_type: user.user_type,
      role_id: updatedRoleId
    }).subscribe({
      next: () => {
        console.log('User updated successfully');
        alert('User updated successfully');
      },
      error: (err) => {
        console.error('Failed to update user:', err);
        alert('Failed to update user');
      }
    });
  }

  sortUsers(users: any[]): any[] {
    const statusOrder: { [key: string]: number } = {
      'pending': 1,
      'approved': 2,
      'rejected': 3
    };

    return users.sort((a, b) => {

      if (a.user_type === 'admin' && b.user_type !== 'admin') return -1;
      if (b.user_type === 'admin' && a.user_type !== 'admin') return 1;

   
      return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
    });
  }
}
