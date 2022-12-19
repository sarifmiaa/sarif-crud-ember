import { PageObject, selector } from 'fractal-page-object';

export class CustomersInfoScreen extends PageObject {
  constructor(elementSelector?: string) {
    super(elementSelector ?? '[data-test-customer-info="root"]');
  }

  title = selector('[data-test-customer-info="title"]');
}
