import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAbduccionComponent } from './pagina-abduccion.component';

describe('PaginaAbduccionComponent', () => {
  let component: PaginaAbduccionComponent;
  let fixture: ComponentFixture<PaginaAbduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAbduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAbduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
