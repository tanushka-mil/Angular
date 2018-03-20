import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthorizeGuard } from './not-authorize.guard';

describe('NotAuthorizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAuthorizeGuard]
    });
  });

  it('should ...', inject([NotAuthorizeGuard], (guard: NotAuthorizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
