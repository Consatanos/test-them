import { Component } from '@angular/core';
import { NmThemingService } from '@imediasoftllc/angular-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private nmThemingService: NmThemingService) {

  }
  title = 'test-theme';
}
