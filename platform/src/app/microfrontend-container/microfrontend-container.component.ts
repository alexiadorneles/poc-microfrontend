import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-microfrontend-container',
  templateUrl: './microfrontend-container.component.html',
  styleUrls: ['./microfrontend-container.component.scss'],
})
export class MicrofrontendContainerComponent implements AfterViewInit {
  @ViewChild('microfrontendContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined;
  private microfrontendID: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe((params) => {
      this.microfrontendID = params.id;
      this.container!.nativeElement.innerHTML = '';
      this.loadScriptJS();
      // commenting following line reproduces the bug we have
      this.renderMicrofrontend();
    });
  }

  private loadScriptJS(): void {
    const microfrontendConfig =
      environment.microfrontends[this.microfrontendID!];
    const script = document.createElement('script');
    script.src = `${microfrontendConfig.url}/single-bundle.js`;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }

  private renderMicrofrontend(): void {
    const microFrontend = document.createElement(
      `app-microfrontend-${this.microfrontendID}`
    );
    this.container!.nativeElement.appendChild(microFrontend);
  }
}
