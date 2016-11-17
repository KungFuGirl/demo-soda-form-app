import Ember from 'ember';

export default Ember.Component.extend({
  linkText: null,
  demoComponentName: null,
  click(e){
    debugger;
    e.preventDefault();
    this.get('updateDisplayDemo')(this.get('demoComponentName'));
  }
});
