import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdyniaComponent } from './gdynia.component';

describe('GdyniaComponent', () => {
  let component: GdyniaComponent;
  let fixture: ComponentFixture<GdyniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdyniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdyniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
