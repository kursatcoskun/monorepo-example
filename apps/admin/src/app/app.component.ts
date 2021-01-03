import { Component } from '@angular/core';
import { Customer } from '@monorepo-example/shared';

@Component({
  selector: 'monorepo-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  customerList: Customer[];
}
