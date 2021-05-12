import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-microfrontend-container',
  templateUrl: './microfrontend-container.component.html',
  styleUrls: ['./microfrontend-container.component.scss'],
})
export class MicrofrontendContainerComponent implements AfterViewInit {
  @ViewChild('microfrontendContainer') container: ElementRef | undefined;
  private microfrontendID: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe((params) => {
      this.microfrontendID = params.id;
      this.loadScriptJS();
      this.renderMicrofrontend();
    });
  }

  private renderMicrofrontend(): void {
    this.container!.nativeElement.innerHTML = '';
    const microFrontend = document.createElement(
      `app-microfrontend-${this.microfrontendID}`
    );
    this.container!.nativeElement.appendChild(microFrontend);
  }

  private loadScriptJS(): void {
    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:4700/single-bundle.js';
    script.type = 'text/javascript';
    this.container!.nativeElement.appendChild(script);
  }
}
