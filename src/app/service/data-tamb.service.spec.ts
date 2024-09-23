import { TestBed } from '@angular/core/testing';

import { DataTambService } from './data-tamb.service';

describe('DataTambService', () => {
  let service: DataTambService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTambService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
