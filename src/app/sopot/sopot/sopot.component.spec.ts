import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopotComponent } from './sopot.component';

describe('SopotComponent', () => {
  let component: SopotComponent;
  let fixture: ComponentFixture<SopotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
