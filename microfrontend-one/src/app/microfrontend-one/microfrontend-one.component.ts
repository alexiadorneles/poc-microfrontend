import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe1-root',
  templateUrl: './microfrontend-one.component.html',
  styleUrls: ['./microfrontend-one.component.scss'],
})
export class MicrofrontendOneComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('MFE1 init');
    window.addEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick, true);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('mfe1 destroyed');
    window.removeEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick, true);
  }

  private handleEventMenuClick(event: CustomEvent | Event) {
    console.log('MFE1 LISTENER ' + (event as CustomEvent).detail);
  }
}
