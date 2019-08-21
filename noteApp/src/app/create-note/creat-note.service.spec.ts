import { TestBed } from '@angular/core/testing';

import { CreatNoteService } from './creat-note.service';

describe('CreatNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatNoteService = TestBed.get(CreatNoteService);
    expect(service).toBeTruthy();
  });
});
