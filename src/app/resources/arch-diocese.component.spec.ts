import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchDioceseComponent } from './arch-diocese.component';

describe('ArchDioceseComponent', () => {
  let component: ArchDioceseComponent;
  let fixture: ComponentFixture<ArchDioceseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchDioceseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchDioceseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
