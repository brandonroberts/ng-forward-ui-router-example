export default angular.module('app.config', [])
.config(['$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);