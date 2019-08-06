import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.id);
  },

  setupController: function(controller, model) {
    console.log('model: ', model);
    controller.set('model', model);
  }
});
