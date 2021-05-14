import { Component, OnInit } from '@angular/core';
import { menuMock, Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus = menuMock;

  constructor() { }

  ngOnInit(): void {
  }

  dispatchEvent(menu: Menu) {

  }

}
