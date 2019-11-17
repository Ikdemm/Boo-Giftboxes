import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooboxDetailsComponent } from './boobox-details.component';

describe('BooboxDetailsComponent', () => {
  let component: BooboxDetailsComponent;
  let fixture: ComponentFixture<BooboxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooboxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
