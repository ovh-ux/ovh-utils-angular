import humanReadableSizeFilter from './humanReadableSize-filter';

export default angular
    .module('ua.humanReadableSize', [])
    .service('humanReadableSize', humanReadableSizeFilter)
    .name;

