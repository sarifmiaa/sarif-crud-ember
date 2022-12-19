import Route from '@ember/routing/route';
import {
  Customer,
  CustomerMappedAttributes,
} from 'customerio-app/common/customer';
import { inject as service } from '@ember/service';
import CustomerService from 'customerio-app/services/customer';

interface CustomerEditRouteModel {
  customerMapped: CustomerMappedAttributes[];
  customer: Customer;
}

interface Params {
  id: number;
}

export default class CustomerEditRoute extends Route {
  @service declare customer: CustomerService;

  async model(params: Params): Promise<CustomerEditRouteModel> {
    const { id } = params;

    const customer = await this.customer.getCustomer(id);

    return {
      customerMapped: this.loadCustomerAttributes(customer),
      customer: customer,
    };
  }

  loadCustomerAttributes(customer: Customer): CustomerMappedAttributes[] {
    const customerAtrributes: CustomerMappedAttributes[] = [];

    customerAtrributes.push({
      name: 'id',
      value: customer.id.toString(),
    });

    Object.entries(customer.attributes).forEach(([key, value]) => {
      customerAtrributes.push({
        name: key,
        value,
      });
    });

    return customerAtrributes;
  }
}
