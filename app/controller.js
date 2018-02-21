angular.module('myApplication')
  .controller('MainController', function ($scope) {
    
    this.selectedItem = null;

    this.contactList = [
      {
        id: 1,
        fullName: 'Luciano Murruni',
        yearOfBirth: 1982
      },
      {
        id: 2,
        fullName: 'Antonio Sulla',
        yearOfBirth: 1985
      }
    ];
    
    /**
     * 
     * @param {*} data 
     */
    this.addNew = function (data) {
      //console.log(data);
      if (data.id!==''){
        this.updateItem(data);
      } else {
        data.id = this.contactList.length+1;
        this.contactList.push(data);
      }
    };

    /** */
    this.updateItem = function updateItem(data){
      for (var i = 0; i < this.contactList.length; i++){
        if (this.contactList[i].id === data.id){
          this.contactList[i].fullName = data.fullName;
          this.contactList[i].yearOfBirth = data.yearOfBirth;
        }
      }
    }

    /**
     * 
     * @param {*} i 
     */
    this.delete = function (element){
      
      this.contactList.splice(element, 1);

    };

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