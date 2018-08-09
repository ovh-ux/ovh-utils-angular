import tooltipBoxDirective from './tooltipBox-directive';

export default angular
    .module('ua.tooltipBox', [])
    .constant('tooltipBoxConfig', [
        'container',
        'selector',
        'title',
        'contentText',
        'contentTemplate',
        'placement',
        'animation',
        'unique',
        'html',
        'trigger',
        'delay',
        'hideOnBlur'
    ])
    .directive('tooltipBox', tooltipBoxDirective)
    .name;

