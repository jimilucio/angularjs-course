angular.module('myApplication')
  .directive('contact', function () {

    return {
      restrict: 'E',
      templateUrl: 'contact.html',
      scope: {
        'contacts': '=',
        'delete': '&',
        'edit': '&'
      },
      link: function(){

      }
    };

  });