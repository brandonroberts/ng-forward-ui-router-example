import Metastore from 'ng-forward/cjs/classes/metastore';
import {bundleStore} from 'ng-forward/cjs/writers';
export const stateStore = new Metastore('$states');

let parseConfig = (config) => {
  let { name, path: url, component, resolve, params, onEnter, onExit, template } = config;

  let stateConfig = { url, resolve, params, onEnter, onExit, template };

  let selector = bundleStore.get('selector', component);

  if (!stateConfig.template) {
      stateConfig.template = `<${selector} [params]="$stateParams"></${selector}>`;
  }

  stateConfig.controller = ['$scope', '$stateParams', ($scope, $stateParams) => {
      $scope.$stateParams = $stateParams;
  }];

  return stateConfig;
}

export const StateConfig = (configs = []) => (target) => {
  let states = [];

  configs.forEach(config => {
    if (!config.path) {
      throw new Error('Config object is missing a path property');
    }

    if (!config.name) {
        throw new Error('Config object is missing a name property');
    }

    stateStore.set(config.name, parseConfig(config), target);
  });
};