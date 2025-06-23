import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingComponentComponent } from './typing-component.component';

describe('TypingComponentComponent', () => {
  let component: TypingComponentComponent;
  let fixture: ComponentFixture<TypingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
