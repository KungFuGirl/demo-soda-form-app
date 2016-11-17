import Ember from 'ember';
 
export default Ember.Route.extend({
  init() {
    this.get('store').push({
      data: [{
        id: 1,
        type: "flavor",
        attributes: {
          name: "cherry"
        }
      },{
        id: 2,
        type: "flavor",
        attributes: {
          name: "cream"
        }
      }, {
        id: 3,
        type: "flavor",
        attributes: {
          name: "rootbeer"
        }
      }]
    });
  },
  model() {
    return this.get('store').createRecord('soda');
  }
});
