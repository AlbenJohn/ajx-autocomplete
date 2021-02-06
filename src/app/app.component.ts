import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ajxautocomplete';
  form: FormGroup;
constructor( private formBuilder: FormBuilder){
  this.createForm();
}
onSelected(data) {
  console.log(data);
}

  public employees = [
    {
      "id": 1,
      "name": "Parsifal",
      "gender": "Male"
    }, {
      "id": 2,
      "name": "Mirabel",
      "gender": "Female"
    }, {
      "id": 3,
      "name": "Verne",
      "gender": "Male"
    }, {
      "id": 4,
      "name": "Julissa",
      "gender": "Female"
    }, {
      "id": 5,
      "name": "Chaddy",
      "gender": "Male"
    }, {
      "id": 6,
      "name": "Cosme",
      "gender": "Male"
    }]

    createForm() {
      this.form = this.formBuilder.group({
        keyword: ''
         });
    }
}
