import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABUTUSComponent } from './abut-us.component';

describe('ABUTUSComponent', () => {
  let component: ABUTUSComponent;
  let fixture: ComponentFixture<ABUTUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABUTUSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABUTUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
