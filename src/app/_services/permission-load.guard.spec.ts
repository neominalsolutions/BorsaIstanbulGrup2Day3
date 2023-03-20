import { TestBed } from '@angular/core/testing';

import { PermissionLoadGuard } from './permission-load.guard';

describe('PermissionLoadGuard', () => {
  let guard: PermissionLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
