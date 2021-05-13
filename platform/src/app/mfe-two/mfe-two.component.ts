import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mfe-two',
  templateUrl: './mfe-two.component.html',
  styleUrls: ['./mfe-two.component.scss'],
})
export class MfeTwoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadScriptJS('two');
  }

  private loadScriptJS(id: string): void {
    if (document.getElementById('two-js')) return;
    const microfrontendConfig = environment.microfrontends[id!];
    const script = document.createElement('script');
    script.id = id + '-js';
    script.src = `${microfrontendConfig.url}/single-bundle.js`;
    script.type = 'text/javascript';
    script.defer = true;
    document.body.appendChild(script);
  }
}
