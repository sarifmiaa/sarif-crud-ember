import {
  Customer,
  CustomerMappedAttributes,
} from 'customerio-app/common/customer';
import { ReadonlyDeep } from 'type-fest';

export const CUSTOMER_DRAFT: ReadonlyDeep<Customer> = {
  id: 1,
  attributes: {
    company: 'Ebert Inc',
    created_at: '1542590989',
    email: 'KelleyWillms@example.com',
    first_name: 'Kelley',
    last_name: 'Willms',
  },
  last_updated: 1546123164,
};

export const CUSTOMERS_DRAFT_MAPPED: CustomerMappedAttributes[] = [
  {
    name: 'company',
    value: 'Ebert Inc',
  },
];

export const CUSTOMERS_DRAFT: Customer[] = [
  {
    id: 1,
    attributes: {
      company: 'Ebers James',
      created_at: '1542590989',
      email: 'KelleyWillms@example.com',
      first_name: 'Jimmy',
      last_name: 'Willms',
    },
    last_updated: 1670222874,
  },
  {
    id: 2,
    attributes: {
      company: 'Muller LLC',
      created_at: '1527564604',
      email: 'PatienceMills@example.com',
      first_name: 'Patience',
      job_title: 'Legacy Directives Architect',
      last_name: 'Mills',
      phone: '685-077-9075',
    },
    last_updated: 1528345580,
  },
];
