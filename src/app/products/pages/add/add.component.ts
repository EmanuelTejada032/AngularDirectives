import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  productsForm: FormGroup = this.formBuilder.group({
    name: ['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  sendFormData(){
    console.log(this.productsForm.value);
    
  }

  isInvalidField(field: string): boolean{
    return this.productsForm.get(field)?.invalid || false;
  }
}
