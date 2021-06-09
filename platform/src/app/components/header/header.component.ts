import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { SessionQuery } from 'src/app/state/session.query';
import { AuthTokenService } from '../../services/auth-token/auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthTokenService],
})
export class HeaderComponent implements OnInit {
  public userAuth = {
    authState: 'unauthenticated',
    token: '',
  };

  constructor(
    private authTokenService: AuthTokenService,
    private sessionQuery: SessionQuery,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.getTokenFromService();
    this.sessionQuery.selectActive().subscribe((session) => {
      if (session) {
        this.userAuth.token = session.token;
        this.dispatchEvent({ ...session, authState: 'authenticated' });
      }
    });
  }

  public getTokenFromService(): void {
    this.authTokenService
      .getAuthToken()
      .subscribe((token: string[]) =>
        this.sessionService.updateToken(token.shift()!)
      );
  }

  public renewToken(): void {
    this.sessionService.updateToken('');
    this.getTokenFromService();
  }

  private dispatchEvent(newStatus: object | any): void {
    const event = new CustomEvent('AUTH.NEW_STATUS', {
      detail: newStatus,
    });

    window.dispatchEvent(event);
  }
}
