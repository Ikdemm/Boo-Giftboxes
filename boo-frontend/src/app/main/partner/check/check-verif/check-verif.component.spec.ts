import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVerifComponent } from './check-verif.component';

describe('CheckVerifComponent', () => {
  let component: CheckVerifComponent;
  let fixture: ComponentFixture<CheckVerifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckVerifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckVerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
