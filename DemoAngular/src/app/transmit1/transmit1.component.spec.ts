import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transmit1Component } from './transmit1.component';

describe('Transmit1Component', () => {
  let component: Transmit1Component;
  let fixture: ComponentFixture<Transmit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transmit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transmit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
