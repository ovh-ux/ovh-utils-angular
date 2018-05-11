import storageService from './storage-service';

export default angular
    .module('ua.storage', [])
    .service('storage', storageService)
    .name;

