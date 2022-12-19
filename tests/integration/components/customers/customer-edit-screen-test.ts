import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';

import { hbs } from 'ember-cli-htmlbars';

import { CustomerEditScreen } from '../../../test-support/page-objects/components/customers/customer-edit-screen';
import {
  Customer,
  CustomerMappedAttributes,
} from 'customerio-app/common/customer';
import {
  CUSTOMERS_DRAFT_MAPPED,
  CUSTOMER_DRAFT,
} from 'customerio-app/fixtures/customer/draft';
const editScreen = new CustomerEditScreen();

interface TestContext extends BaseTestContext {
  customer: Customer;
  customerMapped: CustomerMappedAttributes[];
}

function email() {
  return CUSTOMER_DRAFT.attributes['email'] || '';
}

module(
  'Integration | Component | <Customers::CustomerEditScreen />',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function (this: TestContext) {
      this.customer = CUSTOMER_DRAFT;
      this.customerMapped = CUSTOMERS_DRAFT_MAPPED;
    });

    test('it renders customer edit screen', async function (this: TestContext, assert) {
      await render(hbs`
        <Customers::CustomerEditScreen
          @customer={{this.customer}}
          @customerMapped={{this.customerMapped}}
        />
      `);

      assert.dom(editScreen.element).exists();
      assert.dom(editScreen.emailHeader.element).exists();
      assert.dom(editScreen.emailHeader.element).hasText(email());
      assert.dom(editScreen.lastUpdated.element).exists();
    });
  }
);
