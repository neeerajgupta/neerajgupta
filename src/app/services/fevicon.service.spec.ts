import { TestBed } from '@angular/core/testing';

import { FeviconService } from './fevicon.service';

describe('FeviconService', () => {
  let service: FeviconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeviconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
