import { module, test } from 'qunit';
import { setupRenderingTest } from 'customerio-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{format-date this.inputValue}}`);

    assert.dom(this.element).hasText('Jan 1st 1970, 01:20 AM');
  });
});
