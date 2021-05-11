import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendRootComponent } from './microfrontend-root.component';

describe('MicrofrontendRootComponent', () => {
  let component: MicrofrontendRootComponent;
  let fixture: ComponentFixture<MicrofrontendRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
