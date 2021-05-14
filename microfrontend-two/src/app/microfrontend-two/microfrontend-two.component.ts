import { HostListener } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe2-root',
  templateUrl: './microfrontend-two.component.html',
  styleUrls: ['./microfrontend-two.component.scss'],
})
export class MicrofrontendTwoComponent implements OnInit, OnDestroy {



  ngOnInit(): void {
    window.addEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick, true);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('mfe2 destroyed');

    window.removeEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick, true);
  }

  private handleEventMenuClick(event: CustomEvent | Event) {
    console.log('MFE2 LISTENER ' + (event as CustomEvent).detail);
  }

}
