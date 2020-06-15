import { TestBed } from '@angular/core/testing';

import { Base64dialogService } from './base64dialog.service';

describe('Base64dialogService', () => {
  let service: Base64dialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64dialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
