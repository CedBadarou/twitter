import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpostsComponent } from './showposts.component';

describe('ShowpostsComponent', () => {
  let component: ShowpostsComponent;
  let fixture: ComponentFixture<ShowpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
