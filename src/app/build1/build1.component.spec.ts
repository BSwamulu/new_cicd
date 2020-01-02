import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Build1Component } from './build1.component';

describe('Build1Component', () => {
  let component: Build1Component;
  let fixture: ComponentFixture<Build1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Build1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Build1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
