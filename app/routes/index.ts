import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {
  Customer,
  CustomersResponse,
  Meta,
} from 'customerio-app/common/customer';
import CustomerService from 'customerio-app/services/customer';

interface IndexRouteModel {
  customers: Customer[];
  meta: Meta;
}

export default class IndexRoute extends Route {
  @service declare customer: CustomerService;

  async model(): Promise<IndexRouteModel> {
    const response: CustomersResponse = await this.customer.getCustomers();
    return {
      customers: response.customers,
      meta: response.meta,
    };
  }
}
