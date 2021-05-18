import { TestBed } from '@angular/core/testing';

import { NotasRegistroService } from './notas-registro.service';

describe('NotasRegistroService', () => {
  let service: NotasRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
