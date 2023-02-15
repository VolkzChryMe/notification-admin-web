import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNotificationSmsTableComponent } from './log-notification-sms-table.component';

describe('LogNotificationSmsTableComponent', () => {
  let component: LogNotificationSmsTableComponent;
  let fixture: ComponentFixture<LogNotificationSmsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogNotificationSmsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNotificationSmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
