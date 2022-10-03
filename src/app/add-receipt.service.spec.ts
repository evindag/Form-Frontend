import { TestBed } from '@angular/core/testing';

import { AddReceiptService } from './add-receipt.service';

describe('AddReceiptService', () => {
  let service: AddReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
