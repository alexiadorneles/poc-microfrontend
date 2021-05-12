import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-microfrontend-container',
  templateUrl: './microfrontend-container.component.html',
  styleUrls: ['./microfrontend-container.component.scss'],
})
export class MicrofrontendContainerComponent implements AfterViewInit, OnInit {
  @ViewChild('microfrontendContainer') container: ElementRef | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => console.log(params));
  }

  ngAfterViewInit(): void {
    this.loadScriptJS();
    this.renderMicrofrontend();
  }

  private renderMicrofrontend(): void {
    if (!this.container) {
      return;
    }
    this.container.nativeElement.innerHTML = '';
    const microFrontend = document.createElement(`app-microfrontend-root`);
    this.container.nativeElement.appendChild(microFrontend);
  }

  private loadScriptJS(): void {
    if (!this.container) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:4700/single-bundle.js';
    script.type = 'text/javascript';
    this.container.nativeElement.appendChild(script);
  }
}
