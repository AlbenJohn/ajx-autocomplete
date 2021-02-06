import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjxAutocompleteComponent } from './ajx-autocomplete.component';

describe('AjxAutocompleteComponent', () => {
  let component: AjxAutocompleteComponent;
  let fixture: ComponentFixture<AjxAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjxAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjxAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
