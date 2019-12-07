import { TestBed } from '@angular/core/testing';

import { RoomChatService } from './room-chat.service';

describe('RoomChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomChatService = TestBed.get(RoomChatService);
    expect(service).toBeTruthy();
  });
});
