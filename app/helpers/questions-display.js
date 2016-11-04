import Ember from 'ember';

export function questionsDisplay(params) {
  return Ember.String.htmlSafe(''+params[0].get('title')+' || Answers: '+params[0].get('answers').get('length')+'<span class="asked-by">Asked By:'+params[0].get('author')+'</span>');;
}

export default Ember.Helper.helper(questionsDisplay);
