import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreciationCardComponent } from './appreciation-card.component';

describe('AppreciationCardComponent', () => {
  let component: AppreciationCardComponent;
  let fixture: ComponentFixture<AppreciationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppreciationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppreciationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
