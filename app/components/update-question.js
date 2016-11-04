import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion',question);
      }
    }
  }
});
