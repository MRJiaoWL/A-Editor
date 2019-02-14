import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiaosComponent } from './jiaos.component';

describe('JiaosComponent', () => {
  let component: JiaosComponent;
  let fixture: ComponentFixture<JiaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
