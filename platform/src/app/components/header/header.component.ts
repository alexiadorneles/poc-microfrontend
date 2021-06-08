import { Component, OnInit } from '@angular/core';
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

  constructor(private authTokenService: AuthTokenService) {}

  ngOnInit(): void {
    this.getTokenFromService();
  }

  public getTokenFromService(): void {
    this.authTokenService
      .getAuthToken()
      .subscribe((token: string) =>
        this.setUserAuthState({ authState: 'authenticated', token: token[0] })
      );
  }

  public renewToken(): void {
    this.setUserAuthState({ authState: 'unauthenticated', token: '' });
    this.getTokenFromService();
  }

  private setUserAuthState(newState: object | any): void {
    this.userAuth.authState = newState?.authState;
    this.userAuth.token = newState?.token;

    this.dispatchEvent(newState);
  }

  private dispatchEvent(newStatus: object | any): void {
    const event = new CustomEvent('AUTH.NEW_STATUS', {
      detail: newStatus,
    });

    window.dispatchEvent(event);
  }
}
