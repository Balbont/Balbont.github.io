import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglamentosYProtocolosComponent } from './reglamentos-y-protocolos.component';

describe('ReglamentosYProtocolosComponent', () => {
  let component: ReglamentosYProtocolosComponent;
  let fixture: ComponentFixture<ReglamentosYProtocolosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReglamentosYProtocolosComponent]
    });
    fixture = TestBed.createComponent(ReglamentosYProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
