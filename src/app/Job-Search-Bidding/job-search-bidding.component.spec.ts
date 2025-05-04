import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchBiddingComponent } from './job-search-bidding.component';

describe('JobSearchBiddingComponent', () => {
  let component: JobSearchBiddingComponent;
  let fixture: ComponentFixture<JobSearchBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSearchBiddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSearchBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
