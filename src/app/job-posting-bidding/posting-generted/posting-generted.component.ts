import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-posting-generted',
  imports: [CommonModule, RouterLink],
  templateUrl: './posting-generted.component.html',
  styleUrl: './posting-generted.component.css'
})
export class PostingGenertedComponent {
 posts: any[] = [];


  constructor(private PostService: PostService) {}

ngOnInit(): void {
  this.PostService.getPosts().subscribe({
    next: (res) => {
      this.posts = res;
    },
    error: (err) => {
      console.error('Error fetching data:', err);
      if (err.status === 401) {
        console.warn('Unauthorized: Please login');
      }
    }
  });
}


  onEdit(card: any) {
    alert(`Editing: ${card.title}`);
  }

onDelete(posts: any): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This post will be permanently deleted!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    customClass: {
      popup: 'custom-swal-popup',
      confirmButton: 'custom-swal-confirm',
      cancelButton: 'custom-swal-cancel'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      this.PostService.deletePost(posts.post_id).subscribe({
        next: () => {
          this.posts = this.posts.filter(c => c !== posts);

          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The Post has been deleted.',
            timer: 1500,
            showConfirmButton: false,
            customClass: {
              popup: 'custom-swal-popup'
            }
          });
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete the post. Please try again later.',
            customClass: {
              popup: 'custom-swal-popup'
            }
          });
          console.error('Error deleting post:', err);
        }
      });
    }
  });
}
}

