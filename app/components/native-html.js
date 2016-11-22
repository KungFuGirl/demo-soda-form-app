import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  init() {
    this._super(...arguments);
    this.set('flavors', this.get('store').peekAll('flavor'));
  },
  actions: {
    setFlavor(flavorId) {
        this.set('newSoda.flavor', this.get('store').peekRecord('flavor', flavorId));
      }
  }
});
