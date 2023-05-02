import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navEvent = new EventEmitter<string>();
  emitNavEvent(navEvent: string) {
    this.navEvent.emit(navEvent);
  }
}
