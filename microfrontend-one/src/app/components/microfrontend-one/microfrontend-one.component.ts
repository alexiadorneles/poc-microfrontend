import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/routes/routes';

@Component({
  selector: 'app-mfe1-root',
  templateUrl: './microfrontend-one.component.html',
  styleUrls: ['./microfrontend-one.component.scss'],
})
export class MicrofrontendOneComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.initialNavigation();
    console.log('MFE1 init');
    window.addEventListener(
      'SIDEBAR.MENU_CLICK',
      this.handleEventMenuClick as EventListener
    );

    this.fireMenuEventForPlatform();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('mfe1 destroyed');
    window.removeEventListener(
      'SIDEBAR.MENU_CLICK',
      this.handleEventMenuClick as EventListener
    );
  }

  private fireMenuEventForPlatform(): void {
    const event = new CustomEvent('SIDEBAR.MFE_MENUS', {
      detail: INTERNAL_ROUTES,
    });
    window.dispatchEvent(event);
  }

  private handleEventMenuClick = (event: CustomEvent<string>) => {
    const routeID = event.detail;
    this.router.navigate([{ outlets: { mfe1: routeID } }]);
  };
}
