import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transmit2Component } from './transmit2.component';

describe('Transmit2Component', () => {
  let component: Transmit2Component;
  let fixture: ComponentFixture<Transmit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transmit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transmit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
