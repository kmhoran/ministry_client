import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulverCityComponent } from './culver-city.component';

describe('CulverCityComponent', () => {
  let component: CulverCityComponent;
  let fixture: ComponentFixture<CulverCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulverCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulverCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
