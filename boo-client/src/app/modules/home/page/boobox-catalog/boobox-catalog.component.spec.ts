import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooboxCatalogComponent } from './boobox-catalog.component';

describe('BooboxCatalogComponent', () => {
  let component: BooboxCatalogComponent;
  let fixture: ComponentFixture<BooboxCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooboxCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooboxCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
