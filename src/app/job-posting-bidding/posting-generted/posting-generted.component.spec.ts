import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingGenertedComponent } from './posting-generted.component';

describe('PostingGenertedComponent', () => {
  let component: PostingGenertedComponent;
  let fixture: ComponentFixture<PostingGenertedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostingGenertedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingGenertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
