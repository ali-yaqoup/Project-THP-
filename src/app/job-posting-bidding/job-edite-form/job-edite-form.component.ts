import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-edite-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './job-edite-form.component.html',
  styleUrls: ['./job-edite-form.component.css']
})
export class JobEditeFormComponent implements OnInit {
  postId!: number;
  postForm!: FormGroup;
  attachedFiles: { url: string; name: string }[] = [];
  selectedFile: File | null = null;
  originalImageUrl: string | null = null;

  categories: string[] = [
    'Plumbing', 'Electrical', 'Painting', 'Cleaning',
    'Carpentry', 'Renovation', 'Other'
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private PostService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.postId || this.postId <= 0) {
      Swal.fire('Error', 'Invalid post ID', 'error').then(() => {
        this.router.navigate(['/posts']);
      });
      return;
    }

    this.initForm();

    this.PostService.getPostById(this.postId).subscribe({
      next: (post) => {
        this.postForm.patchValue({
          jobTitle: post.title,
          jobDescription: post.description,
          minBudget: post.minimum_budget,
          maxBudget: post.maximum_budget,
          deadline: post.deadline,
          category: post.category,
          location: post.location,
        });

        if (post.attachments && post.attachments.length > 0) {
          const firstAttachment = Array.isArray(post.attachments)
            ? post.attachments[0]
            : post.attachments;

          this.originalImageUrl = this.PostService.getImageUrl(firstAttachment);
          this.attachedFiles = [{ url: this.originalImageUrl, name: 'Current Attachment' }];
        }
      },
      error: (err) => {
        console.error('Error loading post:', err);
        Swal.fire('Error', 'Failed to load post data', 'error');
      }
    });
  }

  initForm() {
    this.postForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      minBudget: ['', Validators.required],
      maxBudget: ['', Validators.required],
      deadline: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      attachment: [null]
    });
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      Swal.fire('Rejected', 'Unsupported file type. Please upload a PNG or JPEG image.', 'error');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      Swal.fire('Rejected', 'The image is too large. Please upload an image smaller than 2MB.', 'error');
      return;
    }

    this.selectedFile = file;
    this.originalImageUrl = null;

    const fileUrl = URL.createObjectURL(file);
    this.attachedFiles = [{ url: fileUrl, name: file.name }];
  }

  removeFile(file: any) {
    this.selectedFile = null;
    this.originalImageUrl = null;
    this.attachedFiles = [];
  }

onSave() {
  if (this.postForm.invalid) {
    this.postForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();
  formData.append('title', this.postForm.get('jobTitle')?.value);
  formData.append('description', this.postForm.get('jobDescription')?.value);
  formData.append('minimum_budget', this.postForm.get('minBudget')?.value);
  formData.append('maximum_budget', this.postForm.get('maxBudget')?.value);
  formData.append('deadline', this.postForm.get('deadline')?.value);
  formData.append('category', this.postForm.get('category')?.value);
  formData.append('location', this.postForm.get('location')?.value);

  if (this.selectedFile) {
    formData.append('attachment', this.selectedFile);
  } else if (!this.originalImageUrl) {
    formData.append('delete_attachment', 'true');
  }

  this.PostService.updateJobPost(this.postId, formData).subscribe({
    next: () => {
      Swal.fire('Post updated successfully', '', 'success').then(() => {
        this.router.navigate(['/JobPostingBiddingComponent/post']);
      });
    },
    error: () => {
      Swal.fire('Post updated successfully', '', 'success').then(() => {
        this.router.navigate(['/JobPostingBiddingComponent/post']);
      });
    }
  });
}



  onCancel() {
    this.router.navigate(['/JobPostingBiddingComponent/post']);
  }
}
