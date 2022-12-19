import { module, test } from 'qunit';
import { setupTest } from 'customerio-app/tests/helpers';

module('Unit | Service | customer', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:customer');
    assert.ok(service);
  });
});
