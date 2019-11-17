import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesAddComponent } from './boxes-add.component';

describe('BoxesAddComponent', () => {
  let component: BoxesAddComponent;
  let fixture: ComponentFixture<BoxesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
