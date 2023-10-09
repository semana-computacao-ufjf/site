import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInstructionsComponent } from './events-instructions.component';

describe('EventsInstructionsComponent', () => {
  let component: EventsInstructionsComponent;
  let fixture: ComponentFixture<EventsInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInstructionsComponent]
    });
    fixture = TestBed.createComponent(EventsInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
