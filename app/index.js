angular.module('myApplication', [])
.config([function () {

	/* Configuration is where you configure providers ( not instances) */
	console.log("Configuration hook");

}])
.run([function () {
	
	/* Run is when the app gets kicked off */
	console.log("Run hook");

}]);

angular.module('myApplication')
.controller('MainController', function () {
	this.contactList = [];
	this.addNew = function (data) {	
		console.log(data);
		this.contactList.push(data);
	};
})
.controller('ContactController', function () {
	this.item = {};
	this.resetForm = function(){
		this.item = {
			fullName: '',
			yearOfBirth: ''
		};
	};
});