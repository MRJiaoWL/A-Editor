import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiaoDetailComponent } from './jiao-detail.component';

describe('JiaoDetailComponent', () => {
  let component: JiaoDetailComponent;
  let fixture: ComponentFixture<JiaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
