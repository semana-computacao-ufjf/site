import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCtaComponent } from './register-cta.component';

describe('RegisterCtaComponent', () => {
  let component: RegisterCtaComponent;
  let fixture: ComponentFixture<RegisterCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCtaComponent]
    });
    fixture = TestBed.createComponent(RegisterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
