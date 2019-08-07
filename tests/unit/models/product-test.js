import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('product', 'Unit | Model | product', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('product title correctly concats Product:', function(assert) {
  Ember.run(() => {
    let store = this.store();

    const newRecord = store.createRecord('product');
    newRecord.set('title', 'Rubik Cube');

    assert.equal(newRecord.get('fullTitle'), 'Product: Rubik Cube');
  });
});
