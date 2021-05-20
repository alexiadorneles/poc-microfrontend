import { Component, OnInit } from '@angular/core';
import { EventService } from '../services';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    window.addEventListener(
      'SIDEBAR.MFE_MENUS',
      this.handleMenuChangesFromMFE as EventListener
    );
  }

  signalMenuClick(menu: Menu): void {
    this.eventService.fireEvent('Sidebar', 'MenuClick', { menuID: menu.id });
  }

  private handleMenuChangesFromMFE = (event: CustomEvent<Menu[]>) => {
    this.menus = event.detail;
  };
}
