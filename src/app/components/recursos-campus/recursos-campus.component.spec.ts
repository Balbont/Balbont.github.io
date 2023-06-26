import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosCampusComponent } from './recursos-campus.component';

describe('RecursosCampusComponent', () => {
  let component: RecursosCampusComponent;
  let fixture: ComponentFixture<RecursosCampusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosCampusComponent]
    });
    fixture = TestBed.createComponent(RecursosCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
