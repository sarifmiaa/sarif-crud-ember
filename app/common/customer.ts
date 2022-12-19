export interface CustomersResponse {
  customers: Customer[];
  meta: Meta;
}

export interface Customer {
  id: number;
  attributes: CustomerAttributes;
  last_updated: number;
}

export interface CustomerAttributes {
  [key: string]: string;
}

export interface Meta {
  page: number;
  per_page: number;
  total: number;
}

export interface CustomerMappedAttributes {
  name: string;
  value: string;
}
