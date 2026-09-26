import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEmpty } from './product-empty';

describe('ProductEmpty', () => {
  let component: ProductEmpty;
  let fixture: ComponentFixture<ProductEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEmpty],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEmpty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
