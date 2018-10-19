import angular from 'angular';
import translate from 'angular-translate';

import humanReadableSizeFilter from './humanReadableSize-filter';

const moduleName = 'ua.humanReadableSize';

angular
  .module(moduleName, [translate])
  .service('humanReadableSize', humanReadableSizeFilter);

export default moduleName;
