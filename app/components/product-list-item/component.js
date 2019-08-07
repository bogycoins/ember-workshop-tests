import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-md-4'],
  i: 0,

  actions:{
    changeState(){
      this.toggleProperty('isEnabled');
      this.set('i', this.get('i') + 1);
    }
  }
});
