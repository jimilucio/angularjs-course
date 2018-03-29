var app = angular.module('myApplication');

app.controller('contactDetailController', contactDetail);
contactDetail.$inject = ['$routeParams', 'contactService'];

function contactDetail($routeParams, contactService) {
  var that = this;
  that.contactModel = contactService.getContact($routeParams.idContact);
}
