import { action } from '@ember/object';
import Component from '@glimmer/component';
import CustomerService from 'customerio-app/services/customer';
import { inject as service } from '@ember/service';
import { deepTracked } from 'ember-deep-tracked';
import { Customer, CustomerMappedAttributes } from '../../common/customer';
import AttributesSectionComponent from './attributes/attributes-section';
import { tracked } from '@glimmer/tracking';

interface CustomerEditComponentArgs {
  customer: Customer;
  customerMapped: CustomerMappedAttributes[];
}

export default class CustomerEditComponent extends Component<CustomerEditComponentArgs> {
  @service declare customer: CustomerService;

  @deepTracked customerMapped = this.args.customerMapped;
  @tracked isCustomerChangesSaving = false;

  _AttributesSectionRef!: AttributesSectionComponent;

  @action
  discardChanges() {
    if (confirm('All your changes will be ignored')) {
      window.location.href = `/customers/details/${this.args.customer.id}`;
    }
  }

  @action
  setChildRef(args: AttributesSectionComponent) {
    this._AttributesSectionRef = args;
  }

  @action
  saveCustomerChanges() {
    this.isCustomerChangesSaving = true;

    const reqData = {
      customer: {
        attributes: this._AttributesSectionRef.newAddedAttributes,
      },
    };

    this.customer
      .updateCustomer(this.args.customer.id, reqData)
      .then(() => {
        this.isCustomerChangesSaving = false;
        window.location.href = `/customers/details/${this.args.customer.id}`;
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
