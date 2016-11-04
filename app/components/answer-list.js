import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortDefinition'),


  actions: {
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    vote(answer) {
      this.sendAction('vote', answer);
    },

  }
});
