import Component from '@glimmer/component';
import {
  Customer,
  CustomerMappedAttributes,
} from 'customerio-app/common/customer';

interface CustomerDetailsComponentArgs {
  customer: Customer;
  customerMapped: CustomerMappedAttributes[];
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class CustomerDetailsComponent extends Component<CustomerDetailsComponentArgs> {}
