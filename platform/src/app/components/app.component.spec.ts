import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any ;
  let appComponent: any;
  let componentNativeElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    componentNativeElement = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have the property title with 'platform' value`, () => {
    expect(appComponent.title).toEqual('platform');
  });

  it('should render header component', () => {
    expect(componentNativeElement.querySelector('app-header')).not.toBeNull();
  });

  it('should render sidebar component', () => {
    expect(componentNativeElement.querySelector('app-sidebar')).not.toBeNull();
  });

  it('should render router outlet component', () => {
    expect(componentNativeElement.querySelector('router-outlet')).not.toBeNull();
  });

  describe('app-container domain', () => {
    it('should app-container class exist', () => {
      const appContainer = fixture.debugElement.query(By.css('.app-container'));
      expect(appContainer).not.toBeNull();
    });
  
    it('should element app-container contains all elements', () => {
      const appContainer = fixture.debugElement.query(By.css('.app-container'));
      expect(appContainer.nativeElement.querySelector('app-header')).not.toBeNull();
      expect(appContainer.nativeElement.querySelectorAll('main-content')).not.toBeNull();
    });
  });

  describe('main-content domain', () => {
    it('should main-content class exist', () => {
      const mainContent = fixture.debugElement.query(By.css('.main-content'));
      expect(mainContent).not.toBeNull();
    });
  
    it('should element main-content contains all elements', () => {
      const mainContent = fixture.debugElement.query(By.css('.main-content'));
      expect(mainContent.nativeElement.querySelector('app-sidebar')).not.toBeNull();
      expect(mainContent.nativeElement.querySelector('router-outlet')).not.toBeNull();
    });
  });

});
