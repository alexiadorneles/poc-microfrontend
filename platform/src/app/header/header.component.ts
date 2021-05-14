import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  public generateAuthToken(): number {
    return (Math.random() * 10000);
  }

}
