import Ember from 'ember';

export function questionAnswered(params) {
  if(params[0].get('answered') === true) {
    return Ember.String.htmlSafe('<p class="answered-text">This question has been solved</p>');
  }
}

export default Ember.Helper.helper(questionAnswered);
