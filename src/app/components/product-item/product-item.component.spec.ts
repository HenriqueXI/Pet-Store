import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { AnimalType, Product } from './../../interfaces/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { MockComponents, MockDirective } from 'ng-mocks';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';




const product: Product = {
  id: 'EJf7MU4hESS9rlLMJrdH',
  name: 'Product',
  description: 'Pruduct',
  value: 204.9,
  promotional_value: 184.41,
  featured_image: '',
  images: [''],
  videos: [''],
  rating_stars: 5,
  rating_count: 424,
  installment_available: true,
  installment_count: 2,
  featured: true,
  category: 'Medicina e Sa/u00fade',
  subcategory: 'Antipulgas e Carrapatos',
  animal_type: AnimalType.Dog,
  url: '/url',
  created_at: '2021-04-12 11:26:55.881119+00',
  status: '',
}

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ProductItemComponent,
        MockComponents(
          MatIcon,
          MatSidenav,
          MatToolbar,
          MatSidenavContent,
          MatSidenavContainer,
          MatIcon,
          MatCardTitle,
          MatCard,
          MatCardContent,
          ProductItemComponent
        )
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five icon stars in html', () => {
    const html = fixture.nativeElement;
    // Get all matIcons
    const matIcons = document.getElementsByTagName('mat-icon');
    // Check matIcons count
    expect(matIcons.length).toEqual(5);
    // Check first mat icon
    expect(matIcons[0].textContent.trim()).toEqual('star');
  });

  it('should show component mat-card-title in html', () => {
    fixture.detectChanges();
    let matCardTitle = fixture.nativeElement.querySelector('mat-card-title');
    expect(matCardTitle.textContent).toContain('Product');
  });

  it('should show component p in html', () => {
    fixture.detectChanges();
    let p = document.getElementsByClassName('container-value');
    expect(p[0].getElementsByTagName('p')[0].textContent).toContain('204.9');
  });

  it('should show stars with 3.5 rating star', () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 3.5
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();

    const html = fixture.nativeElement;
    // Obtendo todos os matIcons no html
    const matIcons = document.querySelectorAll('mat-icon');
    // Checando todos os icones
    expect(matIcons[0].textContent.trim()).toEqual('star');
    expect(matIcons[1].textContent.trim()).toEqual('star');
    expect(matIcons[2].textContent.trim()).toEqual('star');
    expect(matIcons[3].textContent.trim()).toEqual('star_half');
    expect(matIcons[4].textContent.trim()).toEqual('star_border');
  });
});
