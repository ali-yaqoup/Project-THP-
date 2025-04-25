import { Component } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface AttachedFile {
  name: string;
  url: string | ArrayBuffer | null;
}

@Component({
  selector: 'app-job-edite-form',
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './job-edite-form.component.html',
   styleUrl: './job-edite-form.component.css'
})
export class JobEditeFormComponent {
title: string = '';
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

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'] || 'Post a New Job';
    });

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
