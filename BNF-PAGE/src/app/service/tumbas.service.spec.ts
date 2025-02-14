import { TestBed } from '@angular/core/testing';

import { TumbasService } from './tumbas.service';

describe('TumbasService', () => {
  let service: TumbasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TumbasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
