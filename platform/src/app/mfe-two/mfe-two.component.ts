import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mfe-two',
  templateUrl: './mfe-two.component.html',
  styleUrls: ['./mfe-two.component.scss'],
})
export class MfeTwoComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.loadScriptJS('two');
  }

  private loadScriptJS(id: string): void {
    if (document.getElementById('two-js')) return;
    const microfrontendConfig = environment.microfrontends[id!];
    const script = document.createElement('script');
    script.id = id + '-js';
    script.src = `${microfrontendConfig.url}/single-bundle-two.js`;
    script.type = 'text/javascript';
    script.defer = true;
    document.body.appendChild(script);
  }

  ngOnDestroy(): void {
    const script = document.getElementById('two-js');
    if (!script) return console.error('Script not found');
    document.body.removeChild(script);
  }
}
