import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  message: string = "This is not a required field"
  messageColor: string = 'green';


  productsForm: FormGroup = this.formBuilder.group({
    name: ['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  sendFormData(){
    console.log(this.productsForm.value);
    this.changeMessage();
  }

  isInvalidField(field: string): boolean{
    return this.productsForm.get(field)?.invalid || false;
  }

  changeMessageColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.messageColor = color;

  }

  changeMessage(){
    this.message = `this is a required field ${Math.floor(Math.random() * 10)}`;
  }
}
