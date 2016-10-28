import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          content: this.get('content'),
          date: this.get('date'),
        };
        console.log('before component sendAction')
        this.sendAction('saveQuestion', params);
        console.log('after component sendAction')

    },
  }
});
