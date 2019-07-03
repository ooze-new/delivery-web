import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UuserInfoComponent } from './user-info.component';

describe('UuserInfoComponent', () => {
  let component: UuserInfoComponent;
  let fixture: ComponentFixture<UuserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UuserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UuserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
