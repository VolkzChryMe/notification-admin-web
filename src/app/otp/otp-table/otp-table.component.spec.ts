import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpTableComponent } from './otp-table.component';

describe('OtpTableComponent', () => {
  let component: OtpTableComponent;
  let fixture: ComponentFixture<OtpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
