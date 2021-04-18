import { Parameters } from './../interfaces/parameters';
import { Observable } from "rxjs";



export class ParametersServiceMocks {

  parameter: Parameters;
  getParameters(): Observable<Parameters[]> {
    return new Observable<Parameters[]>(observer => {
      observer.next([
        {
          "company_name": 'PetStore',
          "trademark": 'PetStore',
          "email": '',
          "address": 'Rua',
          "address_complement": 'A',
          "city": 'Sp',
          "state": 'Sp',
          "zip_code": 'Sp',
          "social_networks": [
            {
              "account": 'a',
              "name": 'a'
            }
          ],
          "phones": [
            {
              "number": 'a',
              "type": 'a',
              "country_code": 'a'
            }
          ]
        }
      ])
    });
  }

}
