import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  date: DS.attr()
  // comments: DS.hasMany('comment', {async: true})

});
