import { AnimalType, Product } from './../interfaces/product';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be test get product', () => {
    service.getProduct().subscribe(products => {
      expect(products.length).toEqual(1);
      expect(products[0].name).toEqual('Food');
    })

    // Vamos conferir qual url foi chamada pelo metodo getCategories()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights');

    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

    // Vamos colocar aqui a resposta da requisição
    const products: Array<Product> = [{
      id: 'EJf7MU4hESS9rlLMJrdH',
      name: 'Food',
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
    }]

    req.flush(products);

  });

  it('should get products', () => {
    service.getProducts('ID1').subscribe(product => {
      expect(product.name).toEqual('Product');
    })

    const req = httpTestingController.expectOne('http://petshop-sp.ue.r.appspot.com/v1/product/ID1');

    expect(req.request.method).toEqual('GET');

    // Se vocẽ tiver um produto declarado no escopo do serviço ou em um arquivo de mock utilize ele
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

    req.flush(product);
  });
});
