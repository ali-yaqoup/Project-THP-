import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service'; // فيه getFormPosts()
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

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.loadFormPosts();
  }

  loadFormPosts(): void {
    this.jobService.getFormPosts().subscribe({
      next: (data) => {
        this.formPosts = data;
      },
      error: (err) => {
        console.error('Failed to load form posts:', err);
      }
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
      cancelButtonText: 'Cancel',
      backdrop: true,
      position: 'center',
      customClass: {
        popup: 'custom-swal-popup'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.formPosts = this.formPosts.filter(p => p !== post);
        Swal.fire({
          icon: 'success',
          title: 'Removed!',
          text: 'The form post has been removed.',
          position: 'center',
          timer: 2000,
          showConfirmButton: false,
          customClass: {
            popup: 'swal-sm-popup',
            title: 'swal-sm-title',
            htmlContainer: 'swal-sm-text',
            icon: 'swal-sm-icon'
          }
        });
      }
    });
  }
}
