import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersCardComponent } from './flowers-card.component';

describe('FlowersCardComponent', () => {
  let component: FlowersCardComponent;
  let fixture: ComponentFixture<FlowersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
