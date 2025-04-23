import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidSubmissionComponent } from './bid-submission.component';

describe('BidSubmissionComponent', () => {
  let component: BidSubmissionComponent;
  let fixture: ComponentFixture<BidSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
