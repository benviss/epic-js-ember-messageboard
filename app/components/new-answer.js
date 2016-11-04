import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    newAnswerForm() {
      this.set('newAnswerForm', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        votes: 0,
        question: this.get('question'),
        date: new Date()
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }

});
