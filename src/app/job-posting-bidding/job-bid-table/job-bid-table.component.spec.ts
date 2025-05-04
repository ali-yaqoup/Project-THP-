import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBidTableComponent } from './job-bid-table.component';

describe('JobBidTableComponent', () => {
  let component: JobBidTableComponent;
  let fixture: ComponentFixture<JobBidTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobBidTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
