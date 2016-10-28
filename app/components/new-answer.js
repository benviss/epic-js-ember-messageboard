import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
     saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        date: this.get('date'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
   }

});
