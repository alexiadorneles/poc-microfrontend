import { Component, OnInit } from '@angular/core';
import { AuthStatus } from '../@types';
import { EventService } from '../services';
import { AuthTokenService } from './../services/auth-token/auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthTokenService],
})
export class HeaderComponent implements OnInit {
  public userAuth: AuthStatus = {
    authState: 'unauthenticated',
    token: '',
  };

  constructor(
    private authTokenService: AuthTokenService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getTokenFromService();
  }

  public renewToken(): void {
    this.setUserAuthState({ authState: 'unauthenticated', token: '' });
    this.getTokenFromService();
  }

  private getTokenFromService(): void {
    this.authTokenService
      .getAuthToken()
      .subscribe((token: string) =>
        this.setUserAuthState({ authState: 'authenticated', token: token[0] })
      );
  }

  private setUserAuthState(newState: AuthStatus): void {
    this.userAuth = newState;
    this.signalAuthChanged(newState);
  }

  private signalAuthChanged(newStatus: AuthStatus): void {
    this.eventService.fireEvent('Auth', 'NewStatus', newStatus);
  }
}
