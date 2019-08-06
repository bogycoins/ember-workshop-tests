import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', function() {
    this.route('index', {path: '/'});
    this.route('new');
    this.route('edit', {path: ':id'});
  });
  this.route('categories', function() {
    this.route('new');
  });
});

export default Router;
