import { Observable } from "rxjs";
import { AnimalType, Product, ProductsGetResponse } from "../interfaces/product";




export class ProductsServiceMock{

  product!: Product;
  getProducts(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      observer.next(this.product);
      observer.complete();
    });
}
  getProduct(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next([
        {
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
      ])
    });
  }

  productsList: Array<Product> =[
    {
        name: "Product",
        description: "Product",
        value: 204.9,
        promotional_value: 184.41,
        featured_image: "image_url",
        images: [''],
        videos: [''],
        rating_stars: 5,
        rating_count: 424,
        installment_available: true,
        installment_count: 2,
        featured: true,
        category: "Medicina e Sa\u00fade",
        subcategory: "Antipulgas e Carrapatos",
        animal_type: AnimalType.Dog,
        url: "/url",
        created_at: "2021-04-12 21:28:35.881119+00:00",
        id: "EJf7MU4hES59rlLMJrdH",
        status: '',
    },
    {
        name: "Product2",
        description: "Product2",
        value: 204.9,
        promotional_value: 184.41,
        featured_image: "image_url",
        images: [''],
        videos: [''],
        rating_stars: 5,
        rating_count: 424,
        installment_available: true,
        installment_count: 2,
        featured: true,
        category: "Medicina e Sa\u00fade",
        subcategory: "Antipulgas e Carrapatos",
        animal_type: AnimalType.Dog,
        url: "/url",
        created_at: "2021-04-12 21:28:35.881119+00:00",
        id: "EJf7MU4hES59rlLMJrdH",
        status: ''
    }
]
  getProductsList()  {
      return new Observable<ProductsGetResponse>(observer => {
        observer.next({
          products: [this.product],
          cursor: ''
      });

      observer.complete();
    });
  }

}
