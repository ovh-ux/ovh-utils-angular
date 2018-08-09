import linkedpopover from './linkedpopover/linkedpopover';
import simplepopover from './simplepopover/simplepopover';
import simpletooltip from './simpletooltip/simpletooltip';

import popoverService from './popover-service';

export default angular
    .module('ua.popover', [linkedpopover, simplepopover, simpletooltip])
    .provider('popoverFactory', popoverService)
    .name;

