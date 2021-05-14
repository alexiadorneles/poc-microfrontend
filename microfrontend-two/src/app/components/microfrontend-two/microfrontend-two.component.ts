import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/routes/route';

@Component({
  selector: 'app-mfe2-root',
  templateUrl: './microfrontend-two.component.html',
  styleUrls: ['./microfrontend-two.component.scss'],
})
export class MicrofrontendTwoComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.initialNavigation();

    window.addEventListener(
      'SIDEBAR.MENU_CLICK',
      this.handleEventMenuClick as EventListener,
      true
    );

    this.fireMenuEventsToPlatform();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    window.removeEventListener(
      'SIDEBAR.MENU_CLICK',
      this.handleEventMenuClick as EventListener,
      true
    );
  }

  private fireMenuEventsToPlatform() {
    const event = new CustomEvent('SIDEBAR.MFE_MENUS', {
      detail: INTERNAL_ROUTES,
    });
    window.dispatchEvent(event);
  }

  private handleEventMenuClick = (event: CustomEvent) => {
    const routeID = event.detail;
    this.router.navigate([{ outlets: { mfe2: routeID } }]);
  };
}
