var app = angular.module('myApplication');


app.factory('contactService', function($log, $timeout) {

	this.contactList = [];
	this.contactList.push({
		id: 1,
		fullName: 'Luciano Murruni',
		yearOfBirth: 1982
	});

	this.contactList.push({
		id: 2,
		fullName: 'Antonio Sulla',
		yearOfBirth: 1985
	});

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
		for (var i = 0; i < this.contactList.length; i++){
			if (this.contactList[i].id === data.id){
				this.contactList[i].fullName = data.fullName;
				this.contactList[i].yearOfBirth = data.yearOfBirth;
			}
		}
	}

	/**
	 * Add new contact to the list
	 * 
	 * @param {*} data with user data to add
	 */
	this.addNew = function (data) {
		//console.log(data);
		if (data.id!=='') {
			updateItem(data);
		} else {
			data.id = this.contactList.length+1;
			this.contactList.push(data);
		}
	};

	/**
	 * Delete specific user
	 * 
	 * @param {*} element with the index of the user 
	 */
	this.delete = function (element){
		this.contactList.splice(element, 1);
		return this.contactList;
	};
  
	return this;
	
});