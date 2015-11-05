export default angular.module('app.config', [])
.config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  $stateProvider

  .state('home', {
    url: '/',
    template: '<home></home>'
  }).

  state('about', {
    url: '/about',
    template: '<about></about>'
  });
}]);