import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';

import { hbs } from 'ember-cli-htmlbars';

import { CustomerDetailsScreen } from '../../../test-support/page-objects/components/customers/customer-details-screen';
import {
  Customer,
  CustomerMappedAttributes,
} from 'customerio-app/common/customer';
import {
  CUSTOMERS_DRAFT_MAPPED,
  CUSTOMER_DRAFT,
} from 'customerio-app/fixtures/customer/draft';
const detailsScreen = new CustomerDetailsScreen();

interface TestContext extends BaseTestContext {
  customer: Customer;
  customerMapped: CustomerMappedAttributes[];
}

function email() {
  return CUSTOMER_DRAFT.attributes['email'] || '';
}

module(
  'Integration | Component | <Customers::CustomerDetailsScreen />',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function (this: TestContext) {
      this.customer = CUSTOMER_DRAFT;
      this.customerMapped = CUSTOMERS_DRAFT_MAPPED;
    });

    test('it renders customer details screen', async function (this: TestContext, assert) {
      await render(hbs`
        <Customers::CustomerDetailsScreen
          @customer={{this.customer}}
          @customerMapped={{this.customerMapped}}
        />
      `);

      assert.dom(detailsScreen.element).exists();
      assert.dom(detailsScreen.emailHeader.element).exists();
      assert.dom(detailsScreen.emailHeader.element).hasText(email());
      assert.dom(detailsScreen.lastUpdated.element).exists();
      assert.dom(detailsScreen.editAttributes.element).exists();
    });
  }
);
