import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerIndexComponent } from './beheer-index.component';

describe('BeheerIndexComponent', () => {
  let component: BeheerIndexComponent;
  let fixture: ComponentFixture<BeheerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
