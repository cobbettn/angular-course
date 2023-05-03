import { Component } from '@angular/core';
import { LoggingService } from './shared/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})

export class AppComponent {
  recipes = 'recipes';
  shoppingList = 'shoppingList';

  pageDisplayed: string = this.recipes; // default

  constructor(private loggingService: LoggingService) {
    this.loggingService.log('foo');
  }

  handleNavEvent(event: string) {
    this.pageDisplayed = event;
  }
}
