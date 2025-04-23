import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingsComponent } from './job-postings.component';

describe('JobPostingsComponent', () => {
  let component: JobPostingsComponent;
  let fixture: ComponentFixture<JobPostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
