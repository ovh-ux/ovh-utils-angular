import alerterDirective from './alerter-directive';
import alerterService from './alerter-service';

export default angular
    .module('ua.alerter', [])
    .service('Alerter', alerterService)
    .directive('ovhAlert', alerterDirective)
    .name;

