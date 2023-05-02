import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean;

  @HostListener('click') clickDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
