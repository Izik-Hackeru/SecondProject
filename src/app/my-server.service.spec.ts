import { TestBed } from '@angular/core/testing';

import { MyServerService } from './my-server.service';

describe('MyServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyServerService = TestBed.get(MyServerService);
    expect(service).toBeTruthy();
  });
});
