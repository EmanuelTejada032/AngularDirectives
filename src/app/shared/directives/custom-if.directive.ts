import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {



  @Input() set customIf(conditionResult: boolean){
    if(conditionResult){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else{
      this.viewContainer.clear();
    }

  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) { }

}
