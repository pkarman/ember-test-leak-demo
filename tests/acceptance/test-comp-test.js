import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';

module('Acceptance | test comp', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /test', async function(assert) {
    await visit('/test');

    assert.equal(currentURL(), '/test');

    const page = $('div');

    assert.ok(page.text().includes('i am a component'));
  });
});
