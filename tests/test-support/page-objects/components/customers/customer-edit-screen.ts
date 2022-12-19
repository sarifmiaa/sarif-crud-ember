import { PageObject, selector } from 'fractal-page-object';

export class CustomerEditScreen extends PageObject {
  constructor(elementSelector?: string) {
    super(elementSelector ?? '[data-test-customer-edit="root"]');
  }

  emailHeader = selector('[data-test-customer-edit="email"]');
  lastUpdated = selector('[data-test-customer-edit="last-updated"]');
  discardButton = selector('[data-test-customer-edit="discard-button"]');
  saveButton = selector('[data-test-customer-edit="save-button"]');
}
