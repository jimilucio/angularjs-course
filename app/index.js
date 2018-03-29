angular
  .module('myApplication', ['ngRoute'])
  .config([
    function() {
      /* Configuration is where you configure providers ( not instances) */
      $routeProviders
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
  ])
  .run([
    function() {
      /* Run is when the app gets kicked off */
      //console.log("Run hook");
    },
  ]);
