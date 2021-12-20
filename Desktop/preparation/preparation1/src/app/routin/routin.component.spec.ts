import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinComponent } from './routin.component';

describe('RoutinComponent', () => {
  let component: RoutinComponent;
  let fixture: ComponentFixture<RoutinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
