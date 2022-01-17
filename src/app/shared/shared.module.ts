import { NgModule } from '@angular/core';
import { ErrorMessageDirective } from './directives/error-message.directive';



@NgModule({
  declarations: [
    ErrorMessageDirective
  ],
  exports:[
    ErrorMessageDirective
  ]
})
export class SharedModule { }
