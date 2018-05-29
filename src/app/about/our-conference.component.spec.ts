import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurConferenceComponent } from './our-conference.component';

describe('OurConferenceComponent', () => {
  let component: OurConferenceComponent;
  let fixture: ComponentFixture<OurConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
