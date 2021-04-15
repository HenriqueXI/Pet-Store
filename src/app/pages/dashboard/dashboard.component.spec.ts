import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CategoriesFeaturedComponent } from 'src/app/components/categories-featured/categories-featured.component';
import { ProductsServiceMock } from 'src/app/mocks-service/ProductsServiceMock';
import { ProductsService } from 'src/app/services/products.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        MockComponents(CategoriesFeaturedComponent),
        MockComponents(ProductItemComponent)
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
