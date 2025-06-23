import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateOnLoadComponent } from './animate-on-load.component';

describe('AnimateOnLoadComponent', () => {
  let component: AnimateOnLoadComponent;
  let fixture: ComponentFixture<AnimateOnLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateOnLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
