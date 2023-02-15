import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNotificationEmailTableComponent } from './log-notification-email-table.component';

describe('LogNotificationEmailTableComponent', () => {
  let component: LogNotificationEmailTableComponent;
  let fixture: ComponentFixture<LogNotificationEmailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogNotificationEmailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNotificationEmailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
