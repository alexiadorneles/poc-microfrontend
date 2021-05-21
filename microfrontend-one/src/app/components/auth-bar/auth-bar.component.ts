import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStatus } from 'src/app/@types';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-auth-bar',
  templateUrl: './auth-bar.component.html',
  styleUrls: ['./auth-bar.component.scss'],
})
export class AuthBarComponent implements OnInit, OnDestroy {
  public userAuth: AuthStatus = {} as AuthStatus;
  private subscription: Subscription | undefined;

  constructor(private eventService: EventService) {
    this.setUserAuthState = this.setUserAuthState.bind(this);
  }

  // for some really mysterious reason screen is not re-rendering after property change
  get token(): string {
    return this.userAuth.token;
  }

  ngOnInit(): void {
    const observable = this.eventService
      .onLevel('Auth')
      .getObservable('NewStatus');

    this.subscription = observable.subscribe(this.setUserAuthState);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private setUserAuthState(status: AuthStatus): void {
    this.userAuth = { ...status };
    this.userAuth.token = status.token;
  }
}
