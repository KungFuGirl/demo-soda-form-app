import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  flavorSeeds: ['cherry', 'orange', 'rootbeer'],
  init(){
    this._super(...arguments);
    this.get('flavorSeeds').forEach(function(flav, index){
    this.get('store').createRecord('flavor', {id: index, name: flav});
    }, this);
  },
  flavors: ()=>{this.get('store').peekAll('flavor').then((storeFlavors)=>{
    this.set('flavors', storeFlavors);
  });},
  newSoda: null, //passed in model
  currentSelectDemo: null,
  isNativeHtml: Ember.computed('currentSelectDemo', function(){
    return this.get('currentSelectDemo') === "native-html";}),
  isEmberxSelect: Ember.computed('currentSelectDemo',function(){
    return this.get('currentSelectDemo') === "emberx-select";}),
  isPowerSelect: Ember.computed('currentSelectDemo',function(){
    return this.get('currentSelectDemo') === "power-select";}),
  actions: {
    updateCurrentSelectDemo(newDemo){
      this.set('currentSelectDemo', newDemo);
    }
  }
});
