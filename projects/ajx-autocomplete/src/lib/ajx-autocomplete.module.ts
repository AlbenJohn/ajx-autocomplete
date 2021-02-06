import { NgModule } from '@angular/core';
import { AjxAutocompleteComponent } from './ajx-autocomplete.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AjxAutocompleteComponent],
  imports: [HttpClientModule,FormsModule,ReactiveFormsModule,CommonModule
  ],
  exports: [AjxAutocompleteComponent]
})
export class AjxAutocompleteModule { }
