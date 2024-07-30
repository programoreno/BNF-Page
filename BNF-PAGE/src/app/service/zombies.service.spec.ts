import { TestBed } from '@angular/core/testing';

import { ZombiesService } from './zombies.service';

describe('ZombiesService', () => {
  let service: ZombiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZombiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
