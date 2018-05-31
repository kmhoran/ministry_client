import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCountyComponent } from './la-county.component';

describe('LaCountyComponent', () => {
  let component: LaCountyComponent;
  let fixture: ComponentFixture<LaCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
