export interface Product {
    "id": "fsertsdgfdg",
    "name": "Food",
    "description": string,
    "value": 0,
    "promotional_value": 0,
    "featured_image": string,
    "images": [
      string
    ],
    "videos": [
      string
    ],
    "raging_stars": 0,
    "raging_count": 0,
    "installment_available": true,
    "installment_count": 0,
    "featured": true,
    "category": string,
    "subcategory": string,
    "animal_type": "cachorro",
    "status": string,
    "url": string,
    "created_at": string
}

export interface productGetResponse{
  cursor: string;
  products: Array<Product>;
}

export enum AnimalType{
  Cat = 'gato',
  Dog = 'cachorro',
  Others = 'outros'
}
