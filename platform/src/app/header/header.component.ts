import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public userToken: number | undefined;
  constructor() { }

  ngOnInit(): void {}

  public generateAuthToken(): number {
    this.userToken = Math.trunc(Math.random() * 1000000);
    return this.userToken;
  }
}
