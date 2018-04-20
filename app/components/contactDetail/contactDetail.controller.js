var app = angular.module('myApplication');

app.controller('contactDetailController', contactDetail);
contactDetail.$inject = ['$state', '$log', 'contactService'];

function contactDetail($state, $log, contactService) {
  var that = this;
  that.contactModel = {
    id: null,
    fullName: '',
    yearOfBirth: '',
  };
  if ($state.params.contactId > 0) {
    var $contact = contactService.getContact($state.params.contactId);
    $contact.then(
      function success(response) {
        $log.debug('Service get contact');
        that.contactModel = response.data;
      },
      function error(err) {
        $log.error('Service get contact: ', err);
      }
    );
  }

  that.submit = function(contactForm) {
    console.log(contactForm);
    contactService.addNew(that.contactModel).finally(function() {
      $log.debug('Add/Edit contact ok');
    });
  };
}
