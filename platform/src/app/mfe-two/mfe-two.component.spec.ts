import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeTwoComponent } from './mfe-two.component';

describe('MfeTwoComponent', () => {
  let component: MfeTwoComponent;
  let fixture: ComponentFixture<MfeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
