import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuEvents } from '../events/consumer.events';
import { EventService } from '../services';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  menus: Menu[] = [];
  private subscription: Subscription | undefined;

  constructor(private eventService: EventService) {}

  ngAfterViewInit(): void {
    const observable = this.eventService
      .onLevel('Menu')
      .getObservable('MfeMenus');

    this.subscription = observable.subscribe(this.handleMenuChangesFromMFE);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  signalMenuClick(menu: Menu): void {
    this.eventService.fireEvent('Sidebar', 'MenuClick', { menuID: menu.id });
  }

  private handleMenuChangesFromMFE = ({ menus }: MenuEvents['MfeMenus']) => {
    this.menus = menus;
  };
}
