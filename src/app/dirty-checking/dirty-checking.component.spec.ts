import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyCheckingComponent } from './dirty-checking.component';

describe('DirtyCheckingComponent', () => {
  let component: DirtyCheckingComponent;
  let fixture: ComponentFixture<DirtyCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
