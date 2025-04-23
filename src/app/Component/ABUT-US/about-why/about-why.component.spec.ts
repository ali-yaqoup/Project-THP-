import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhyComponent } from './about-why.component';

describe('AboutWhyComponent', () => {
  let component: AboutWhyComponent;
  let fixture: ComponentFixture<AboutWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
