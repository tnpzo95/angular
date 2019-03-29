import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSevicesComponent } from './work-sevices.component';

describe('WorkSevicesComponent', () => {
  let component: WorkSevicesComponent;
  let fixture: ComponentFixture<WorkSevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
