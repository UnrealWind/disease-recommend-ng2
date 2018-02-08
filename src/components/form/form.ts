import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'form-group',
  templateUrl: 'form.html'
})
export class FormComponent {
  @Input() inputData:Object;
  constructor() {

  }

}
