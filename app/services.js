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
    return $http.patch('http://localhost:3000/contacts', data);
    // for (var i = 0; i < that.contactList.length; i++) {
    //   if (that.contactList[i].id === data.id) {
    //     that.contactList[i].fullName = data.fullName;
    //     that.contactList[i].yearOfBirth = data.yearOfBirth;
    //   }
    // }
  }

  /**
   * Add new contact to the list
   *
   * @param {*} data with user data to add
   */
  that.addNew = function(data) {
    //console.log(data);
    if (data.id !== '') {
      return updateItem(data);
    } else {
      data.id = that.contactList.length + 1;
      return $http
        .post('http://localhost:3000/contacts', data)
        .then(function(response) {
          $log.debug('Item saved: ', data);
        })
        .catch(function(err) {
          $log.errr(err);
        });
    }
  };

  /**
   * Delete specific user
   *
   * @param {*} element with the index of the user
   */
  that.delete = function(element) {
    that.contactList.splice(element, 1);
    return that.contactList;
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

  return that;
});
