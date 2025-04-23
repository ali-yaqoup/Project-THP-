import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeaderComponent } from './contact-header.component';

describe('ContactHeaderComponent', () => {
  let component: ContactHeaderComponent;
  let fixture: ComponentFixture<ContactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
