import applicationSerializer from './application';

export default applicationSerializer.extend({
  payloadKeyFromModelName: function() {
    return 'category';
  }
});
