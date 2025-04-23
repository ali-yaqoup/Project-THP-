import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingBiddingComponent } from './job-posting-bidding.component';

describe('JobPostingBiddingComponent', () => {
  let component: JobPostingBiddingComponent;
  let fixture: ComponentFixture<JobPostingBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostingBiddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
