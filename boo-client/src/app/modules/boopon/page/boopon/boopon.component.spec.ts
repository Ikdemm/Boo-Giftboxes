import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooponComponent } from './boopon.component';

describe('BooponComponent', () => {
  let component: BooponComponent;
  let fixture: ComponentFixture<BooponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
