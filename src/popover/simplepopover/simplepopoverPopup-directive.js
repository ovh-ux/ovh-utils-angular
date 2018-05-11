export default function () {
    "use strict";
    return {
        restrict  : 'A',
        replace   : true,
        scope     : {
            popoverTooltipTitle     : '@',
            popoverTooltipContent   : '@',
            popoverTooltipPlacement : '@',
            popoverTooltipRemote    : '@',
            popoverTooltipId        : '@',
            popoverTooltipIsOpen    : '='
        },
        template: require('./simplepopover.html')
    };
}
