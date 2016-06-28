import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: 'cat/:cat_id'});
  this.route('book', {path: 'book/:book_id'});
});

export default Router;
