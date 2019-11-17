import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersEditComponent } from './partners-edit.component';

describe('PartnersEditComponent', () => {
  let component: PartnersEditComponent;
  let fixture: ComponentFixture<PartnersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
