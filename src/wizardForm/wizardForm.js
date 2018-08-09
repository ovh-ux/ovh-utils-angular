import uaWizardFormStep from './wizardFormStep/wizardFormStep';
import wizardFormDirective from './wizardForm-directive';

export default angular
    .module('ua.wizardForm', [uaWizardFormStep])
    .directive('wizardForm', wizardFormDirective)
    .name;

