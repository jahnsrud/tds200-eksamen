import { TestBed } from '@angular/core/testing';

import { RoomCreatorService } from './room-creator.service';

describe('RoomCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomCreatorService = TestBed.get(RoomCreatorService);
    expect(service).toBeTruthy();
  });
});
