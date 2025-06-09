import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'; 
import { PostService } from '../../services/post.service';

interface AttachedFile {
  file: File;
  name: string;
  url: string | ArrayBuffer | null;
}

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css',
  providers: [PostService]
})
export class JobFormComponent implements OnInit {
  title: string = 'Post a New Job';
  jobForm!: FormGroup;
  attachedFiles: AttachedFile[] = [];

  categories: string[] = [
    'Plumbing',
    'Electrical',
    'Painting',
    'Cleaning',
    'Carpentry',
    'Renovation',
    'Other'
  ];

  constructor(
    private fb: FormBuilder,
    private postService: PostService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      minBudget: ['', Validators.required],
      maxBudget: ['', Validators.required],
      deadline: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.attachedFiles.push({
            file: file,
            name: file.name,
            url: e.target?.result || null
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeFile(file: AttachedFile) {
    this.attachedFiles = this.attachedFiles.filter(f => f !== file);
  }

  submitPost() {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    
    formData.append('title', this.jobForm.value.jobTitle);
    formData.append('description', this.jobForm.value.jobDescription);
    formData.append('minimum_budget', this.jobForm.value.minBudget);
    formData.append('maximum_budget', this.jobForm.value.maxBudget);
    formData.append('deadline', this.jobForm.value.deadline);
    formData.append('category', this.jobForm.value.category);
    formData.append('location', this.jobForm.value.location);

    if (this.attachedFiles.length > 0) {
      formData.append('attachment', this.attachedFiles[0].file, this.attachedFiles[0].name);
    }

    this.postService.createPost(formData).subscribe({
      next: (res) => {
        Swal.fire('Success', 'Post saved successfully', 'success');
        this.jobForm.reset();
        this.attachedFiles = [];
        this.router.navigate(['/JobPostingBiddingComponent/post']);
      },
      error: (err) => {
        console.error(err);
        Swal.fire('Error', 'An error occurred while storing.', 'error');
      }
    });
  }
}
