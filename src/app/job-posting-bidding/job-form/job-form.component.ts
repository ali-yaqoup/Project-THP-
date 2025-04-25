import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface AttachedFile {
  name: string;
  url: string | ArrayBuffer | null;
}

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
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

  constructor(private fb: FormBuilder) {}

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
}
