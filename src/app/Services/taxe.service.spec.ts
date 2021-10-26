import { TestBed } from '@angular/core/testing';

import { TaxeService } from './taxe.service';

describe('TaxeService', () => {
  let service: TaxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
