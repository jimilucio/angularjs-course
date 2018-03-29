var app = angular.module('myApplication');
app.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider.state('contactList', {
      url: '/',
      controller: 'contactListController',
      controllerAs: 'listCtrl',
      templateUrl: '/app/contactList/contactList.template.html',
    });
  },
]);
