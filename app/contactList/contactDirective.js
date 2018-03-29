angular.module('myApplication').directive('contact', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/contactList/contact.html',
    scope: {
      list: '=',
      delete: '&',
      edit: '&',
    },
    link: function($scope) {},
  };
});
