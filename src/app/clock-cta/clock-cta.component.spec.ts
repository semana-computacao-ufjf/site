import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCtaComponent } from './clock-cta.component';

describe('ClockCtaComponent', () => {
  let component: ClockCtaComponent;
  let fixture: ComponentFixture<ClockCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockCtaComponent]
    });
    fixture = TestBed.createComponent(ClockCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
