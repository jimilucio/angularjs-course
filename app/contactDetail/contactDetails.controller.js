var app = angular.module('myApplication');

app.controller('contactDetailController', contactDetail);
contactDetail.$inject = ['$routeParams', 'contactService'];

function contactDetail($routeParams, contactService) {
  var that = this;
  that.contactModel = {
    id: null,
    fullName: '',
    yearOfBirth: '',
  };
  if ($routeParams.idContact > 0) {
    that.contactModel = contactService.getContact($routeParams.idContact);
  }

  that.updateContact = function(contact) {
    contactService.updateContact(contact);
  };
}
