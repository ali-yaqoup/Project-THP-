import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeroComponent } from './services-hero.component';

describe('ServicesHeroComponent', () => {
  let component: ServicesHeroComponent;
  let fixture: ComponentFixture<ServicesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
