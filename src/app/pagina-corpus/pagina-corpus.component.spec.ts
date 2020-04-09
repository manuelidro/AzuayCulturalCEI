import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCorpusComponent } from './pagina-corpus.component';

describe('PaginaCorpusComponent', () => {
  let component: PaginaCorpusComponent;
  let fixture: ComponentFixture<PaginaCorpusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCorpusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCorpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
