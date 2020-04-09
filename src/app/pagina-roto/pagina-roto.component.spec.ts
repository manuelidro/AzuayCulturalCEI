import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRotoComponent } from './pagina-roto.component';

describe('PaginaRotoComponent', () => {
  let component: PaginaRotoComponent;
  let fixture: ComponentFixture<PaginaRotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
