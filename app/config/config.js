export default angular.module('app.config', [])
.config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $urlRouterProvider.otherwise('/404');
}]);