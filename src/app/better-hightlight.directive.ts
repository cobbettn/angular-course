import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() defualtColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  // constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  constructor() { }


  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defualtColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseout') mouseout(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', null);
    this.backgroundColor = this.defualtColor
  }

}
