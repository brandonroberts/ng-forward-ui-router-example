import {stateStore} from '../decorators/state-config';


export const configStates = (target) => {
  return angular.module('app.config', [])
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    stateStore.forEach((config, name) => {
      $stateProvider

      .state(name, config);
    }, target);
  }]);

}
