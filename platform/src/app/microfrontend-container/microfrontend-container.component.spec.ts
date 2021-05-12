import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendContainerComponent } from './microfrontend-container.component';

describe('MicrofrontendContainerComponent', () => {
  let component: MicrofrontendContainerComponent;
  let fixture: ComponentFixture<MicrofrontendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
