import { Component } from '@angular/core';
import {LayoutLibComponent} from '@jelly/layout-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-a';
  asd: LayoutLibComponent;
}
