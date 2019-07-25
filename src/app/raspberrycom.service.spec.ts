import { TestBed } from '@angular/core/testing';

import { RaspberrycomService } from './raspberrycom.service';

describe('RaspberrycomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaspberrycomService = TestBed.get(RaspberrycomService);
    expect(service).toBeTruthy();
  });
});
