import { TestBed } from '@angular/core/testing';

import { EmotesService } from './emotes.service';

describe('EmotesService', () => {
  let service: EmotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
