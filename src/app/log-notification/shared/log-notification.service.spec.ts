import { TestBed } from '@angular/core/testing';

import { LogNotificationService } from './log-notification.service';

describe('SharedService', () => {
  let service: LogNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
