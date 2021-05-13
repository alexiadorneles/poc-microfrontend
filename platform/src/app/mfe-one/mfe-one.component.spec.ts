import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeOneComponent } from './mfe-one.component';

describe('MfeOneComponent', () => {
  let component: MfeOneComponent;
  let fixture: ComponentFixture<MfeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
