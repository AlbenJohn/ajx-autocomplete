import { TestBed } from '@angular/core/testing';

import { AjxAutocompleteService } from './ajx-autocomplete.service';

describe('AjxAutocompleteService', () => {
  let service: AjxAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjxAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
