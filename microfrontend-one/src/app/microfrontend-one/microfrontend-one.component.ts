import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfe1-root',
  templateUrl: './microfrontend-one.component.html',
  styleUrls: ['./microfrontend-one.component.scss'],
})
export class MicrofrontendOneComponent implements OnInit, OnDestroy {

  /**
   *
   */
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.initialNavigation();
    console.log('MFE1 init');
    window.addEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('mfe1 destroyed');
    window.removeEventListener('SIDEBAR.MENU_CLICK', this.handleEventMenuClick);
  }

  private handleEventMenuClick = (event: CustomEvent | Event) => {
    console.log(event);
    this.router.navigate([{outlets: {mfe1: 'meals'}}]);
  }
}
