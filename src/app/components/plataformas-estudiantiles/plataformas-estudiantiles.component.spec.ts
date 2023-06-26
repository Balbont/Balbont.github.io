import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformasEstudiantilesComponent } from './plataformas-estudiantiles.component';

describe('PlataformasEstudiantilesComponent', () => {
  let component: PlataformasEstudiantilesComponent;
  let fixture: ComponentFixture<PlataformasEstudiantilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformasEstudiantilesComponent]
    });
    fixture = TestBed.createComponent(PlataformasEstudiantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
