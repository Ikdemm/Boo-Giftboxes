import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooboxListComponent } from './boobox-list.component';

describe('BooboxListComponent', () => {
  let component: BooboxListComponent;
  let fixture: ComponentFixture<BooboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
