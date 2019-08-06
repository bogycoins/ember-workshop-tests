import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const title = this.get('title');
      const category = this.store.createRecord('category', {
        title
      });

      category.save().then(() => {
        this.set('title', '');
        this.transitionTo('categories.index');
      });
    },

    back() {
      this.transitionTo('categories.index');
    }
  }
});
