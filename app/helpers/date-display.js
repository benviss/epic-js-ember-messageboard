import Ember from 'ember';

export function dateDisplay(params/*, hash*/) {
  if(params[0].get('date') === undefined) {
    return Ember.String.htmlSafe('<p>No date</p>');
  } else {
    var date = new Date(params[0].get('date'))
    return Ember.String.htmlSafe('<p class="date">-Posted On: '+(date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear()+'</p>');
  }
}

export default Ember.Helper.helper(dateDisplay);
