import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerProfileComponent } from './organizer-profile.component';

describe('OrganizerProfileComponent', () => {
  let component: OrganizerProfileComponent;
  let fixture: ComponentFixture<OrganizerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerProfileComponent]
    });
    fixture = TestBed.createComponent(OrganizerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
