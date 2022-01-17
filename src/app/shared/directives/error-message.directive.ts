import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective implements OnInit{

  htmlElement!: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement =  element;
  }
  
  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }
}
