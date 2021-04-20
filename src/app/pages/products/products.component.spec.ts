import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsServiceMock } from 'src/app/mocks-service/ProductsServiceMock';
import { ProductsService } from 'src/app/services/products.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        MockComponents(ProductItemComponent),
      ],

      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        }

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
