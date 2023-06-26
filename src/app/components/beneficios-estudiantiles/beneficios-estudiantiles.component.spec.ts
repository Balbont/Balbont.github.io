import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosEstudiantilesComponent } from './beneficios-estudiantiles.component';

describe('BeneficiosEstudiantilesComponent', () => {
  let component: BeneficiosEstudiantilesComponent;
  let fixture: ComponentFixture<BeneficiosEstudiantilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiosEstudiantilesComponent]
    });
    fixture = TestBed.createComponent(BeneficiosEstudiantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
