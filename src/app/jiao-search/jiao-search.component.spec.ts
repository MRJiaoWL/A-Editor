import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiaoSearchComponent } from './jiao-search.component';

describe('JiaoSearchComponent', () => {
  let component: JiaoSearchComponent;
  let fixture: ComponentFixture<JiaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
