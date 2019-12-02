import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectNavGuard } from './protect-nav.guard';

describe('ProtectNavGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectNavGuard]
    });
  });

  it('should ...', inject([ProtectNavGuard], (guard: ProtectNavGuard) => {
    expect(guard).toBeTruthy();
  }));
});
