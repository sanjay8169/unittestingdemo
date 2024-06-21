import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
  standalone: true
})
export class CustomdirectiveDirective {

  constructor(private element : ElementRef) { 
    element.nativeElement.style.background = "red";
    element.nativeElement.style.color = "yellow";
  }

}
