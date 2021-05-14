import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mfe-one',
  templateUrl: './mfe-one.component.html',
  styleUrls: ['./mfe-one.component.scss'],
})
export class MfeOneComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    console.log('------------ AFTER VIEW INIT');
    this.loadScriptJS('one');
  }

  private loadScriptJS(id: string): void {
    if (document.getElementById('one-js')) return;
    const microfrontendConfig = environment.microfrontends[id!];
    const script = document.createElement('script');
    script.id = id + '-js';
    script.src = `${microfrontendConfig.url}/single-bundle-one.js`;
    script.type = 'text/javascript';
    script.defer = true;
    document.body.appendChild(script);
  }

  ngOnDestroy(): void {
    const script = document.getElementById('one-js');
    if (!script) return console.error('Script not found');
    document.body.removeChild(script);
  }
}
