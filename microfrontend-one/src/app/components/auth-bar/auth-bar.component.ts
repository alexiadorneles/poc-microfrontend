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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
