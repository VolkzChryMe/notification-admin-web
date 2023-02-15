import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNotificationComponent } from './log-notification.component';

describe('LogNotificationComponent', () => {
  let component: LogNotificationComponent;
  let fixture: ComponentFixture<LogNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
