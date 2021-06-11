import { Component } from '@angular/core';
import { QueriesLoader } from '../loader/queries.loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platform';
  constructor(queriesLoader: QueriesLoader) {
    queriesLoader.load();
  }
}
