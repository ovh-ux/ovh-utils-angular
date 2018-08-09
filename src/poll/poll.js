import pollService from './poll-service';

export default angular
    .module('ua.poll', [])
    .service('Poll', pollService)
    .name;

