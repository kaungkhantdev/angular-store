import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductError } from './product-error';

describe('ProductError', () => {
  let component: ProductError;
  let fixture: ComponentFixture<ProductError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductError],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
