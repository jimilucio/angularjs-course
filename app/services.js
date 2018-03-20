var app = angular.module('myApplication');


app.factory('contactService', function($log, $timeout, $http) {

	var that = this;

	/** 
	 * LOCAL FUNCTIONS
	*/


	/**
	 * Update the specific item to the list
	 * 
	 * @param {*} object with user data to edit 
	 */
	function updateItem(data){
		$log.debug('Update item with data: ', data);
		for (var i = 0; i < that.contactList.length; i++){
			if (that.contactList[i].id === data.id){
				that.contactList[i].fullName = data.fullName;
				that.contactList[i].yearOfBirth = data.yearOfBirth;
			}
		}
	}

	/**
	 * Add new contact to the list
	 * 
	 * @param {*} data with user data to add
	 */
	that.addNew = function (data) {
		//console.log(data);
		if (data.id!=='') {
			updateItem(data);
		} else {
			data.id = that.contactList.length+1;
			that.contactList.push(data);
		}
	};

	/**
	 * Delete specific user
	 * 
	 * @param {*} element with the index of the user 
	 */
	that.delete = function (element){
		that.contactList.splice(element, 1);
		return that.contactList;
	};

	that.$contacts = $http({
		method: 'GET',
		url: 'http://localhost:3000/contacts'
	});

	that.$contacts.then(function success(response){
		$log.debug('Service $contacts');
		that.contactList = response.data;
	}, function error(err){
		$log.error('Service $contacts: ', err);
	});
  
	return that;
	
});