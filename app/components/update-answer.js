import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer',answer);
      }
    }
  }
});
