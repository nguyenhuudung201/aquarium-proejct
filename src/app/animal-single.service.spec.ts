import { TestBed } from '@angular/core/testing';

import { AnimalSingleService } from './animal-single.service';

describe('AnimalSingleService', () => {
  let service: AnimalSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
