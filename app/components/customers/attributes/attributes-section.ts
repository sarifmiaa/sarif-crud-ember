import { action } from '@ember/object';
import Component from '@glimmer/component';
import {
  Customer,
  CustomerAttributes,
  CustomerMappedAttributes,
} from '../../../common/customer';
import { tracked } from 'ember-deep-tracked';

interface AttributesSectionComponentArgs {
  customer: Customer;
  customerMapped: CustomerMappedAttributes[];
  viewMode: 'edit' | 'view';
  setRef(args: AttributesSectionComponent): void;
}

export default class AttributesSectionComponent extends Component<AttributesSectionComponentArgs> {
  @tracked customerAtrributes: CustomerMappedAttributes[] =
    this.args.customerMapped;
  newAddedAttributes: CustomerAttributes = {};

  @action
  setElementRef() {
    this.args.setRef(this);
  }

  @action
  addNewCustomerAtrributes(attributes: CustomerMappedAttributes): void {
    this.customerAtrributes.push({
      name: attributes.name,
      value: attributes.value,
    });

    this.newAddedAttributes[attributes.name] = attributes.value;
  }

  @action
  updateAttribute(attribute: CustomerMappedAttributes): void {
    this.newAddedAttributes[attribute.name] = attribute.value;

    console.log(this.newAddedAttributes);
  }

  @action
  removeAttribute(attribute: CustomerMappedAttributes): void {
    this.customerAtrributes = this.customerAtrributes.filter(
      (att) => att.name !== attribute.name
    );

    this.newAddedAttributes[attribute.name] = '';
  }

  @action
  resetDataForCustomerAttributes(
    customerMapped: CustomerMappedAttributes[]
  ): void {
    this.customerAtrributes = customerMapped;
  }
}
