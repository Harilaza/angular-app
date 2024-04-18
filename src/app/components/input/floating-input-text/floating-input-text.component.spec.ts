import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInputTextComponent } from './floating-input-text.component';

describe('FloatingInputTextComponent', () => {
  let component: FloatingInputTextComponent;
  let fixture: ComponentFixture<FloatingInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingInputTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
