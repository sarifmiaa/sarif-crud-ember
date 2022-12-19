import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';

import { hbs } from 'ember-cli-htmlbars';

import { CustomersInfoScreen } from '../../../test-support/page-objects/components/customers/customers-info-screen';
import { Customer } from 'customerio-app/common/customer';
import { CUSTOMERS_DRAFT } from 'customerio-app/fixtures/customer/draft';
const infoScreen = new CustomersInfoScreen();

interface TestContext extends BaseTestContext {
  customers: Customer[];
}

module(
  'Integration | Component | <Customers::CustomerInfoScreen />',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function (this: TestContext) {
      this.customers = CUSTOMERS_DRAFT;
    });

    test('it renders customer info screen', async function (this: TestContext, assert) {
      await render(hbs`
        <Customers::CustomersInfoScreen
          @customers={{this.customers}}
        />
      `);

      assert.dom(infoScreen.element).exists();
      assert.dom(infoScreen.title.element).exists();
      assert.dom(infoScreen.title.element).hasText('Customers');
    });
  }
);
