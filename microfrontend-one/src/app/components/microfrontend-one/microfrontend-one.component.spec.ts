import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendOneComponent } from './microfrontend-one.component';

describe('MicrofrontendOneComponent', () => {
  let component: MicrofrontendOneComponent;
  let fixture: ComponentFixture<MicrofrontendOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
