/**
 * @type module
 * @name ovh-utils-angular
 * @see [url=http://docs.angularjs.org/api/ng.$http]`$http`[/url] service.
 * @description
 * Application level module which depends on the below modules.
 * # Modules
 * [url=#/module=ovhDirectives]`ovhDirectives`[/url]
 * [url=#/module=ovhServices]`ovhServices`[/url]
 * [url=#/module=ovhFilters]`ovhFilters`[/url]
 * # Response interceptors
 * `$httpProvider` use interceptor
 * [url=#/module=ovhServices&service=HttpInterceptor]`HttpInterceptor`[/url].
 */

import angular from 'angular';

import uaWizard from './wizard/wizard';
import uaWizardForm from './wizardForm/wizardForm';
import uaTriStateCheckbox from './triStateCheckbox/triStateCheckbox';
import uaTooltipBox from './tooltipBox/tooltipBox';
import uaStorage from './storage/storage';
import uaPopover from './popover/popover';
import uaPaginationServerSide from './paginationServerSide/paginationServerSide';
import uaNavigator from './navigator/navigator';
import uaContracts from './contracts/contracts';
import uaAlerter from './alerter/alerter';
import uaPrice from './price/price';
import uaPoll from './poll/poll';
import uaHumanReadableSize from './humanReadableSize/humanReadableSize';

const moduleName = 'ovh-utils-angular';

angular.module('ovh-utils-angular', [
  uaWizardForm,
  uaWizard,
  uaTriStateCheckbox,
  uaTooltipBox,
  uaStorage,
  uaPopover,
  uaPaginationServerSide,
  uaNavigator,
  uaContracts,
  uaAlerter,
  uaPrice,
  uaPoll,
  uaHumanReadableSize,
]);

export default moduleName;
