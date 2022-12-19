import EmberRouter from '@ember/routing/router';
import config from 'customerio-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('customers', function () {
    this.route('details', { path: '/details/:id' });
    this.route('edit', { path: '/edit/:id' });
  });
});
