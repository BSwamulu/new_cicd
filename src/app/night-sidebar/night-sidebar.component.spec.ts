import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightSidebarComponent } from './night-sidebar.component';

describe('NightSidebarComponent', () => {
  let component: NightSidebarComponent;
  let fixture: ComponentFixture<NightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
