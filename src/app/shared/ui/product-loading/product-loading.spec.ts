import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductLoading } from './product-loading';

describe('ProductLoading', () => {
  let component: ProductLoading;
  let fixture: ComponentFixture<ProductLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLoading],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductLoading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
