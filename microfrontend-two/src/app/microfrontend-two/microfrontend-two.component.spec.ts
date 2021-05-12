import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendTwoComponent } from './microfrontend-two.component';

describe('MicrofrontendTwoComponent', () => {
  let component: MicrofrontendTwoComponent;
  let fixture: ComponentFixture<MicrofrontendTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
