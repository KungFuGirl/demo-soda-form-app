import Ember from 'ember';
const {
  get,
  set
} = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  
  init() {
    this._super( ...arguments );
    set(this, 'flavors', this.get('store').findAll('flavor'));
  },

  actions: {
      setFlavor(flavor) {
        this.set('newSoda.flavor', flavor);
      }
   }
});