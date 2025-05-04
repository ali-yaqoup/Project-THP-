import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditeFormComponent } from './job-edite-form.component';

describe('JobEditeFormComponent', () => {
  let component: JobEditeFormComponent;
  let fixture: ComponentFixture<JobEditeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobEditeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEditeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
