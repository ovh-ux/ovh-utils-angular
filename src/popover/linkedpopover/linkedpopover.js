import linkedpopoverDirective from './linkedpopover-directive';
import linkedpopoverPopupDirective from './linkedpopoverPopup-directive';

export default angular
    .module('ua.popover.linkedpopover', [])
    .directive('linkedpopover', linkedpopoverDirective)
    .directive('linkedpopoverPopup', linkedpopoverPopupDirective)
    .name;

