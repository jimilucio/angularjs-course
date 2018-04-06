var app = angular.module('myApplication');

app.controller('contactDetailController', contactDetail);
contactDetail.$inject = ['$state', 'contactService'];

function contactDetail($state, contactService) {
  var that = this;
  that.contactModel = {
    id: null,
    fullName: '',
    yearOfBirth: '',
  };
  if ($state.params.contactId > 0) {
    that.contactModel = contactService.getContact($state.params.contactId);
  }

  that.submit = function(contactForm) {
    console.log(contactForm);
    contactService.addNew(data).finally(function() {
      console.log('Add/Edit contact ok');
    });
  };
}
