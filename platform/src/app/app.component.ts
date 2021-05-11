import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platform';

  tabs = [{ name: 'App 1' }, { name: 'App 2' }];

  @ViewChild('microfrontendContainer') container: ElementRef | undefined;

  ngAfterViewInit() {
    this.loadScriptJS();
    this.renderMicrofrontend();
  }

  private renderMicrofrontend() {
    this.container!.nativeElement.innerHTML = '';
    const microFrontend = document.createElement(`app-microfrontend-root`);
    this.container!.nativeElement.appendChild(microFrontend);
  }

  private loadScriptJS() {
    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:4700/single-bundle.js';
    script.type = 'text/javascript';
    this.container!.nativeElement.appendChild(script);
  }
}
