# Ajxautocomplete

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Installation

Run `npm install ajx-autocomplete`

## Usage

First import AjxAutocompleteModule to your module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AjxAutocompleteModule } from 'ajx-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AjxAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Then create a reactive form:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class AppComponent {

  myForm: FormGroup;
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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      keyword: ''
       });
  }
onSelected(data) {
  console.log(data);
}
}
```

Add seletor with static array source:

```html
 <form [formGroup]="form">
    <ajx-autocomplete formControlName="keyword"
                      [control]="form.controls['keyword']"
                      [staticDataSource]="employees"
                      suggestionPropName="name"
                      [placeholder]="'Enter Name'"
                      (selected)="onSelected($event)"></ajx-autocomplete>
  </form>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
