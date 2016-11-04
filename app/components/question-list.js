import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['answered'],
  sortedQuestions: Ember.computed.sort('questions', 'sortDefinition'),
});
