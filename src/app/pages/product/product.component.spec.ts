
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsServiceMock } from 'src/app/mocks-service/ProductsServiceMock';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        RouterLink,
        MockComponents(
          ProductItemComponent,
          MatIcon,
          MatSidenav,
          MatToolbar,
          MatSidenavContent,
          MatSidenavContainer,
          MatIcon,
          MatCardTitle,
          MatCard,
          MatCardContent,
          RouterLink,
        )
      ],
       providers: [
         {
          provide: ProductsService,
          useClass: ProductsServiceMock,
         },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(id: string) {
                  return
                }
              }
            }
          }
        }
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
