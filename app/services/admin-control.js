import Ember from 'ember';

export default Ember.Service.extend({
  username: 'Ben',
  password: 'Awesome',

  loggedIn: false,

  logIn(u,p) {
    if((this.get('username') === u) && (this.get('password') === p)) {
      this.set('loggedIn', true);
    } else {
      alert("Incorrect Login Information");
    }
  },
  logOut() {
    this.set('loggedIn', false);
  }
});
