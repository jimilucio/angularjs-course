var app = angular.module('myApplication');
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('contactList', {
      url: '/contactList',
      controller: 'contactListController',
      controllerAs: 'listCtrl',
      templateUrl: '/app/components/contactList/contactList.template.html',
    });
    $stateProvider.state('contactDetail', {
      url: '/contactDetail/{contactId}',
      controller: 'contactDetailController',
      controllerAs: 'detailCtrl',
      templateUrl: '/app/components/contactDetail/contactDetail.template.html',
    });
    $urlRouterProvider.otherwise('contactList');
  },
]);
