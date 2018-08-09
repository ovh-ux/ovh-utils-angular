import simpletooltipDirective from './simpletooltip-directive';
import simpletooltipPopupDirective from './simpletooltipPopup-directive';

export default angular
    .module('ua.popover.simpletooltip', [])
    .directive('simpletooltipPopup', simpletooltipPopupDirective)
    .directive('simpletooltip', simpletooltipDirective)
    .name;

