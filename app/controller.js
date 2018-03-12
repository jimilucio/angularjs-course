var app = angular.module('myApplication');

app.controller('MainController', function ($scope, contactService, $log, $timeout) {
    
    this.selectedItem = null;
    this.contactList = contactService.contactList;
    

    this.delete = contactService.delete;
    this.addNew = contactService.addNew;

    /**
     * 
     * @param {*} i 
     */
    this.edit = function (element){
      this.selectedItem = this.contactList[element];
      $scope.$broadcast('selectedUser', { item: this.selectedItem });
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