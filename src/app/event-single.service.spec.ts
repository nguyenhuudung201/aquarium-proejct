import { TestBed } from '@angular/core/testing';

import { EventSingleService } from './event-single.service';

describe('EventSingleService', () => {
  let service: EventSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
