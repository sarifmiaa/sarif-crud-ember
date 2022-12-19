import { PageObject, selector } from 'fractal-page-object';

export class CustomerDetailsScreen extends PageObject {
  constructor(elementSelector?: string) {
    super(elementSelector ?? '[data-test-customer-details="root"]');
  }

  emailHeader = selector('[data-test-customer-details="email-header"]');
  editAttributes = selector('[data-test-customer-details="edit-attributes"]');
  lastUpdated = selector('[data-test-customer-details="last-updated"]');
}
