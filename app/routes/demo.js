import Ember from 'ember';
 
let flavors = [{
  id: 1,
  name: "cherry"
},{
  id: 2,
  name: "cream"
},{
  id: 3,
  name: "orange"
},{
  id: 4,
  name: "rootbeer"
}];

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('soda');
  },
  flavors() {
    return flavors;
  }
});
