import { Observable } from "rxjs";
import { AnimalType, Product } from "../interfaces/product";



export class ProductsServiceMock{

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
}
