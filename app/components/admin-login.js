import Ember from 'ember';

export default Ember.Component.extend({
  adminControl: Ember.inject.service(),

  actions: {
    logIn() {
      var user = this.get('username');
      var pass = this.get('password');
      this.get('adminControl').logIn(user, pass);
      this.set('username', "");
      this.set('password', "");
    },

    logOut() {
      this.get('adminControl').logOut();
    }
  }
});
