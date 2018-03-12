angular.module('myApplication')
  .directive('contact', function () {

    return {
      restrict: 'E',
      templateUrl: 'contact.html',
      scope: {
        'list': '=',
        'delete': '&',
        'edit': '&'
      },
      link: function($scope){
      }

    };

  });