import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;

  problem(): string {
    let url = 'If you see this, there is a problem.';
    let query = (() => {
      url = 'If you see this, all is right.';
      console.log('Updating URL (1): ' + url);
      return '';
    })();
    url += query;
    console.log('Updating URL (2): ' + url);
    return url;
  }

  noProblem(): string {
    let url = 'If you see this, there is a problem.';
    let query = (() => {
      url = 'If you see this, all is right.';
      return '';
    })();
    url = url + query;
    return url;
  }

}