import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiaoListComponent } from './jiao-list.component';

describe('JiaoListComponent', () => {
  let component: JiaoListComponent;
  let fixture: ComponentFixture<JiaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
