import Component from '@glimmer/component';
import { Customer } from 'customerio-app/common/customer';

interface CustomerTableSectionComponentArgs {
  customers: Customer[];
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class CustomerTableSectionComponent extends Component<CustomerTableSectionComponentArgs> {}
