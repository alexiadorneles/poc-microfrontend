import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe1-root',
  templateUrl: './microfrontend-one.component.html',
  styleUrls: ['./microfrontend-one.component.scss'],
})
export class MicrofrontendOneComponent implements OnInit {
  ngOnInit(): void {
    console.log('MFE1 init');
  }
}
