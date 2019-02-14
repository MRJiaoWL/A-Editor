import { TestBed } from '@angular/core/testing';

import { JiaoService } from './jiao.service';

describe('JiaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JiaoService = TestBed.get(JiaoService);
    expect(service).toBeTruthy();
  });
});
