import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCongresoComponent } from './pagina-congreso.component';

describe('PaginaCongresoComponent', () => {
  let component: PaginaCongresoComponent;
  let fixture: ComponentFixture<PaginaCongresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCongresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
