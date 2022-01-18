import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective implements OnInit, OnChanges{

  htmlElement!: ElementRef<HTMLElement>;
  private _color: string = 'red'; 
  private _message: string = "Not req field";

  
  @Input() set color(value : string){
    this.setColor();
    this._color = value;
  }
  
  @Input() set message(value : string){
    this.setMessage();
    this._message = value;
  }
  
  @Input() set isValid(isValid : boolean){
    if(!isValid){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }

  };
  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement =  element;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Not a great way since a directive can have a lot of inputs
    // const {message, color} = changes;
    // if(message){
    //   this.htmlElement.nativeElement.innerText = message.currentValue;
    // }

    // if(color){
    //   this.htmlElement.nativeElement.style.color = color.currentValue;
    // }

  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setCssClass();
  }

  setCssClass() {
   this.htmlElement.nativeElement.className = "form-text";
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }


}
