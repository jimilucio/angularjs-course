var app = angular.module('myApplication');
app.config([
  '$routeProvider',
  function($routeProvider) {
    /* Configuration is where you configure providers ( not instances) */
    $routeProvider
      .when('/contacts', {
        templateUrl: 'contact-list.html',
        controller: 'contactListController',
        controllerAs: 'contactCtrl',
      })
      .when('/contactsDetail/:contactId', {
        templateUrl: 'contact-detail.html',
        controller: 'contactDetailController',
        controllerAs: 'contactDetailCtrl',
      })
      .otherwise({
        controller: 'Error404Controller',
        templateUrl: 'Views/Error404.html',
      });
  },
]);
