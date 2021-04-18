export interface Parameters {
  "company_name": string,
  "trademark": string,
  "email": string,
  "address": string,
  "address_complement": string,
  "city": string,
  "state": string,
  "zip_code": string,
  "social_networks": [
    {
      "account": string,
      "name": string
    }
  ],
  "phones": [
    {
      "number": string,
      "type": string,
      "country_code": string
    }
  ]
}
