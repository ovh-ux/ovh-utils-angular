import simplepopoverDirective from './simplepopover-directive';
import simplepopoverPopupDirective from './simplepopoverPopup-directive';

export default angular
    .module('ua.popover.simplepopover', [])
    .directive('simplepopover', simplepopoverDirective)
    .directive('simplepopoverPopup', simplepopoverPopupDirective)
    .name;

