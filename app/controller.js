angular.module('myApplication')
  .controller('MainController', function () {
    this.selectedItem = 0;
    this.contactList = [{
      fullName: 'Luciano',
      yearOfBirth: 1982
    }];
    this.addNew = function (data) {
      //console.log(data);
      this.contactList.push(data);
    };
    this.delete = function (i){
      this.contactList.slice(i, 1);
    };
    this.edit = function (i){
      this.selectedItem = i;
    }
  })
  .controller('ContactController', function () {
    this.item = {};
    this.resetForm = function () {
      this.item = {
        fullName: '',
        yearOfBirth: ''
      };
    };
  });