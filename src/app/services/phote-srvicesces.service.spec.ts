import { TestBed } from '@angular/core/testing';

import { PhoteSrvicescesService } from './phote-srvicesces.service';

describe('PhoteSrvicescesService', () => {
  let service: PhoteSrvicescesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoteSrvicescesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
