import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-bar',
  templateUrl: './auth-bar.component.html',
  styleUrls: ['./auth-bar.component.scss']
})
export class AuthBarComponent implements OnInit, OnDestroy {
  public userAuth = {
    authState: 'unauthenticated',
    token: '',
  };

  constructor() {
    this.setUserAuthState = this.setUserAuthState.bind(this);
  }

  ngOnInit(): void {
    window.addEventListener(
      'AUTH.NEW_STATUS',
      this.setUserAuthState as EventListener
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'AUTH.NEW_STATUS',
      this.setUserAuthState as EventListener
    );
  }

  private setUserAuthState(event: CustomEvent<any>): void {
    this.userAuth.authState = event.detail?.authState;
    this.userAuth.token = event.detail?.token;
  }
}
