var app = angular.module('myApplication');

app.factory('contactService', function($log, $timeout, $http, $q) {
  var that = this;
  that.$contacts = $q.defer();

  /**
   * LOCAL FUNCTIONS
   */

  /**
   * Update the specific item to the list
   *
   * @param {*} object with user data to edit
   */
  function updateItem(data) {
    $log.debug('Update item with data: ', data);
    return $http.patch('http://localhost:3000/contacts/' + data.id, data);
  }

  /**
   * Add new contact to the list
   *
   * @param {*} data with user data to add
   */
  that.addNew = function(data) {
    //console.log(data);
    if (data.id>0) {
      return updateItem(data);
    } else {
      return $http
        .post('http://localhost:3000/contacts', data)
        .then(function(response) {
          $log.debug('Item saved: ', data);
        })
        .catch(function(err) {
          $log.err(err);
        });
    }
  };

  /**
   * Delete specific user
   *
   * @param {*} element with the index of the user
   */
  that.delete = function(element) {
    
    //console.log(data);
    if (element !== '') {
      return $http
        .delete('http://localhost:3000/contacts/'+element)
        .then(function(response) {
          $log.debug('Item saved: ', response);
        })
        .catch(function(err) {
          $log.err(err);
        });
    }
    
  };

  that.updateContactList = function updateContactList() {
    that.$contacts = $http.get('http://localhost:3000/contacts');

    that.$contacts.then(
      function success(response) {
        $log.debug('Service $contacts');
        that.contactList = response.data;
      },
      function error(err) {
        $log.error('Service $contacts: ', err);
      }
    );
    return that.$contacts;
  };

  that.getContactList = function() {
    return that.contactList;
  };

  that.getContact = function(idContact) {
    return $http.get('http://localhost:3000/contacts/' + idContact);
  };

  return that;
});
