import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

const generateScriptID = (mfe: string = '') => `${mfe}-script`;

@Component({
  selector: 'app-microfrontend-container',
  templateUrl: './microfrontend-container.component.html',
  styleUrls: ['./microfrontend-container.component.scss'],
})
export class MicrofrontendContainerComponent implements AfterViewInit {
  @ViewChild('microfrontendContainer') container:
    | ElementRef<HTMLDivElement>
    | undefined;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe((params) => this.loadMicrofrontend(params.id));
  }

  private loadMicrofrontend = (id: string): void => {
    if (this.scriptDoesNotExistOnDOM(id)) {
      this.loadScriptJS(id);
    }
    this.renderMicrofrontend(id);
  }

  private cleanContainerContent(): void {
    this.container!.nativeElement.innerHTML = '';
  }

  private scriptDoesNotExistOnDOM(id: string): boolean {
    const existingScript = document.getElementById(generateScriptID(id));
    return !Boolean(existingScript);
  }

  private loadScriptJS(id: string): void {
    const microfrontendConfig = environment.microfrontends[id!];
    const script = document.createElement('script');
    script.id = generateScriptID(id);
    script.src = `${microfrontendConfig.url}/${microfrontendConfig.scriptName}`;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }

  private renderMicrofrontend(id: string): void {
    this.cleanContainerContent();
    const microFrontend = document.createElement(`app-microfrontend-${id}`);
    this.container!.nativeElement.appendChild(microFrontend);
  }
}
