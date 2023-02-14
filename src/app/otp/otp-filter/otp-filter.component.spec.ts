import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFilterComponent } from './otp-filter.component';

describe('OtpFilterComponent', () => {
  let component: OtpFilterComponent;
  let fixture: ComponentFixture<OtpFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
