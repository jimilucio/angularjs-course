(function() {
  var app = angular.module('myApplication');

  app.controller('contactListController', contactList);
  
  contactList.$inject = ['contactService', '$log'];
  
  function contactList(contactService, $log) {
    var that = this;

    function updateContactListModel() {
      var $contactList = contactService.updateContactList();
      that.contactList = [];

      $contactList.finally(function() {
        that.contactList = contactService.getContactList();
      });
    }

    that.delete = function(item){
      contactService.delete(item)
        .finally(updateContactListModel);
    }

    updateContactListModel();
  }
})();
