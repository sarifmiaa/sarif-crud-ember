import Component from '@glimmer/component';
import { Customer } from 'customerio-app/common/customer';

interface TableDataComponentArgs {
  customer: Customer;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class TableDataComponent extends Component<TableDataComponentArgs> {}
