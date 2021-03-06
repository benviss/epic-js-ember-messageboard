import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  answered: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),

});
