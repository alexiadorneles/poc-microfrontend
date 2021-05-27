import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus: Menu[] = [];

  constructor() {}

  ngOnInit(): void {
    window.addEventListener(
      'SIDEBAR.MFE_MENUS',
      this.handleMenuChangesFromMFE as EventListener
    );
  }

  dispatchEvent(menu: Menu): void {
    const event = new CustomEvent('SIDEBAR.MENU_CLICK', {
      detail: menu.id,
    });
    window.dispatchEvent(event);
  }

  private handleMenuChangesFromMFE = (event: CustomEvent<Menu[]>) => {
    console.log("handleMenuChangesFromMFE ------- ");
    this.menus = event.detail;
  }
}
