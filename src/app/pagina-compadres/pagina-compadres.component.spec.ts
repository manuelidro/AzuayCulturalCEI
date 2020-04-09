import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompadresComponent } from './pagina-compadres.component';

describe('PaginaCompadresComponent', () => {
  let component: PaginaCompadresComponent;
  let fixture: ComponentFixture<PaginaCompadresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCompadresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCompadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
