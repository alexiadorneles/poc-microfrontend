import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { queryInjector } from 'src/app/injectors/query.injector';
import { SessionQuery } from 'src/app/state/queries';

@Component({
  selector: 'app-auth-bar',
  templateUrl: './auth-bar.component.html',
  styleUrls: ['./auth-bar.component.scss'],
})
export class AuthBarComponent implements OnInit, OnDestroy {
  public userAuth = {
    authState: 'unauthenticated',
    token: '',
  };

  private subscription: Subscription | undefined;

  constructor(
    @Inject(queryInjector.getQueryInjector('session'))
    private query: SessionQuery,
    private changeDetector: ChangeDetectorRef
  ) {
    this.setUserAuthState = this.setUserAuthState.bind(this);
  }

  ngOnInit(): void {
    this.query
      .getReversedToken()
      .subscribe((reverseToken) =>
        console.log('REVERSED TOKEN:', reverseToken)
      );

    this.subscription = this.query.selectActive().subscribe((session) => {
      this.userAuth.token = session?.token || '';
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private setUserAuthState(event: CustomEvent<any>): void {
    this.userAuth.authState = event.detail?.authState;
    this.userAuth.token = event.detail?.token;
  }
}
