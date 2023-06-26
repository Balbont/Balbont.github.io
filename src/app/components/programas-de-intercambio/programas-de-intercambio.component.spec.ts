import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasDeIntercambioComponent } from './programas-de-intercambio.component';

describe('ProgramasDeIntercambioComponent', () => {
  let component: ProgramasDeIntercambioComponent;
  let fixture: ComponentFixture<ProgramasDeIntercambioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramasDeIntercambioComponent]
    });
    fixture = TestBed.createComponent(ProgramasDeIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
