import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsComponent } from './donations.component';

describe('DonationsComponent', () => {
  let component: DonationsComponent;
  let fixture: ComponentFixture<DonationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationsComponent]
    });
    fixture = TestBed.createComponent(DonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
