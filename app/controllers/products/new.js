import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategory: null,

  invalid: Ember.computed('product', function () {
    return !this.get('product.validations.isValid');
  }),

  titleErrors: Ember.computed('product', function () {
    return this.get('product.validations.attrs.title.errors');
  }),

  descriptionErrors: Ember.computed('product', function () {
    return this.get('product.validations.attrs.description.errors');
  }),

  product: null,

  actions: {
    setCategory: function (newValue) {
      this.set('selectedCategory', newValue);
    },

    submit() {
      const title = this.get('title');
      // const category = this.get('category');
      const description = this.get('description');

      const product = this.store.createRecord('product', {
        title,
        description,
      });
      this.set('product', product);

      if (product.get('validations.isValid')) {
        this.get('product').save().then(() => {
          this.set('title', '');
          this.set('description', '');
          this.set('product', null);
          this.transitionToRoute('products.index');
        });
      }
    }
  }
});
