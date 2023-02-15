import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNotificationFilterComponent } from './log-notification-filter.component';

describe('LogNotificationFilterComponent', () => {
  let component: LogNotificationFilterComponent;
  let fixture: ComponentFixture<LogNotificationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogNotificationFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNotificationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
