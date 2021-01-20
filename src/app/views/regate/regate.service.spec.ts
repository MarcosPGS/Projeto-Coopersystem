import { TestBed } from '@angular/core/testing';

import { RegateService } from './regate.service';

describe('RegateService', () => {
  let service: RegateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
