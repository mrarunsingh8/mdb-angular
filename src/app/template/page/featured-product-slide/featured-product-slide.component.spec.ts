import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductSlideComponent } from './featured-product-slide.component';

describe('FeaturedProductSlideComponent', () => {
  let component: FeaturedProductSlideComponent;
  let fixture: ComponentFixture<FeaturedProductSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProductSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProductSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
