import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionForm() {
      this.set('newQuestionForm', true);
    },
    saveQuestion() {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          content: this.get('content')
        };
        this.set('newQuestionForm', false);
        this.sendAction('saveQuestion', params);
    },
  }
});
