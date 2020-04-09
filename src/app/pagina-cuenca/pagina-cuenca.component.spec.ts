import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCuencaComponent } from './pagina-cuenca.component';

describe('PaginaCuencaComponent', () => {
  let component: PaginaCuencaComponent;
  let fixture: ComponentFixture<PaginaCuencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCuencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCuencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
