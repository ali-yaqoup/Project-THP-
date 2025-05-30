import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMissionComponent } from './about-mission.component';

describe('AboutMissionComponent', () => {
  let component: AboutMissionComponent;
  let fixture: ComponentFixture<AboutMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
