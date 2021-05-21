import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideBarEvents } from 'src/app/events/consumer.events';
import { INTERNAL_ROUTES } from 'src/app/routes/routes';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-mfe2-root',
  templateUrl: './microfrontend-two.component.html',
  styleUrls: ['./microfrontend-two.component.scss'],
})
export class MicrofrontendTwoComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.router.initialNavigation();
    this.listenToMenuClickEvent();
    this.fireMenuEventsToPlatform();
  }

  private listenToMenuClickEvent(): void {
    const observable = this.eventService
      .onLevel('Sidebar')
      .getObservable('MenuClick');
    this.subscription = observable.subscribe(this.handleMenuClick);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private fireMenuEventsToPlatform(): void {
    this.eventService.fireEvent('Menu', 'MfeMenus', { menus: INTERNAL_ROUTES });
  }

  private handleMenuClick = ({ menuID }: SideBarEvents['MenuClick']) => {
    this.router.navigate([{ outlets: { mfe2: menuID } }]);
  };
}
