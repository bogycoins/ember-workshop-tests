import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3004',

  init() {
    this._super(...arguments);

    this.set('headers', {
      'Content-Type': 'application/vnd.api+json'
    });
  }
});
