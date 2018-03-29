// var app = angular.module('myApplication');

// app
//   .controller('MainController', function($scope, contactService, $log) {
//     var that = this;

//     that.selectedItem = null;

//     function updateContactListModel() {
//       var $contactList = contactService.updateContactList();
//       that.contactList = [];

//       $contactList.finally(function() {
//         that.contactList = contactService.getContactList();
//       });
//     }

//     that.delete = contactService.delete;
//     that.addNew = function(data) {
//       contactService.addNew(data).finally(function() {
//         updateContactListModel();
//       });
//     };

//     /**
//      *
//      * @param {*} element
//      */
//     that.edit = function(element) {
//       that.selectedItem = that.contactList[element];
//       $scope.$broadcast('selectedUser', { item: that.selectedItem });
//     };

//     updateContactListModel();
//   })
//   .controller('ContactController', function($scope) {
//     var that = this;

//     that.item = {};

//     $scope.$on('selectedUser', function(event, args) {
//       that.item = args.item;
//     });

//     that.resetForm = function() {
//       that.item = {
//         id: '',
//         fullName: '',
//         yearOfBirth: '',
//       };
//     };

//     that.resetForm();
//   });
