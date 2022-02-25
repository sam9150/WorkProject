import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopspaceComponent } from './topspace.component';

describe('TopspaceComponent', () => {
  let component: TopspaceComponent;
  let fixture: ComponentFixture<TopspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
