import uaWizardStep from './wizardStep/wizardStep';
import wizardDirective from './wizard-directive';

export default angular
    .module('ua.wizard', [uaWizardStep])
    .directive('wizard', wizardDirective)
    .name;

