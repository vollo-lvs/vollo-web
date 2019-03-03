import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerScholenComponent } from './beheer-scholen.component';

describe('BeheerScholenComponent', () => {
  let component: BeheerScholenComponent;
  let fixture: ComponentFixture<BeheerScholenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerScholenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerScholenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
