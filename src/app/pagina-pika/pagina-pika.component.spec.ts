import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPikaComponent } from './pagina-pika.component';

describe('PaginaPikaComponent', () => {
  let component: PaginaPikaComponent;
  let fixture: ComponentFixture<PaginaPikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
