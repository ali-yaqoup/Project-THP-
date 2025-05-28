import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.css']
})
export class JobPostingsComponent implements OnInit {
  formPosts: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.formPosts$.subscribe((data) => {
      this.formPosts = data;

    });
  }

  removePost(post: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to remove this post?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.jobService.deleteFormPost(post.post_id).subscribe({
          next: () => {
            Swal.fire('Removed!', 'The form post has been removed.', 'success');
          },
          error: () => {
            Swal.fire('Error', 'Failed to delete post.', 'error');
          }

        });
      }

    });

  }
}
