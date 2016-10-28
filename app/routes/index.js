import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      console.log("in index save")
      var newQuestion = this.store.createRecord('question', params);
      console.log('new question var')
      newQuestion.save();
      console.log("question save")
      this.transitionTo('index');
      console.log("actions completed")
    }
  }

});
