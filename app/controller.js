var app = angular.module('myApplication');

app.controller('MainController', function ($scope, contactService, $log, $timeout) {
    var that = this;

    that.selectedItem = null;
    //that.contactList = contactService.contactList;
    that.contactList = [];
    
    contactService.$contacts
      .then(function(){
        $log.debug('Controller 1st $contacts');
      })
      .then(function(){
        $log.debug('Controller 2nd $contacts');
      }, function(err){
        $log.error('Controller 2nd $contacts', err);
      })
      .catch(function(err){
        $log.debug('Controller catch', err);
      })
      .finally(function(){
        that.contactList = contactService.contactList;    
      });
    
  
    that.delete = contactService.delete;
    that.addNew = contactService.addNew;

    /**
     * 
     * @param {*} i 
     */
    that.edit = function (element){
      that.selectedItem = that.contactList[element];
      $scope.$broadcast('selectedUser', { item: that.selectedItem });
    };

    

  })
  .controller('ContactController', function ($scope) {

    var that = this;
    
    that.item = {};

    $scope.$on('selectedUser', function(event, args){
      that.item = args.item;
    });

    that.resetForm = function () {
      that.item = {
        id: '',
        fullName: '',
        yearOfBirth: ''
      };
    };

    that.resetForm();

  });