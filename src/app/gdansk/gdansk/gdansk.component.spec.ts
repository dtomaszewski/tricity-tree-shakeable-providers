import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdanskComponent } from './gdansk.component';

describe('GdanskComponent', () => {
  let component: GdanskComponent;
  let fixture: ComponentFixture<GdanskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdanskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdanskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
