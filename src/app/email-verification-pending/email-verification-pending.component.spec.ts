import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationPendingComponent } from './email-verification-pending.component';

describe('EmailVerificationPendingComponent', () => {
  let component: EmailVerificationPendingComponent;
  let fixture: ComponentFixture<EmailVerificationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
