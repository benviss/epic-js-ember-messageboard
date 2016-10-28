import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },

    upVote(answer) {
      var currentVotes = answer.get('votes');
      currentVotes += 1;
      var newAnswer = answer;
      newAnswer.votes = currentVotes;
      this.sendAction('vote', newAnswer);
    },

    downVote(answer) {
      var currentVotes = answer.get('votes');
      currentVotes -= 1;
      var newAnswer = answer;
      newAnswer.votes = currentVotes;
      this.sendAction('vote', newAnswer);
    },
  }
});
