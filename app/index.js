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
	.controller('ContactController', function ($scope, $log) {
		$scope.fullName = '';
		$scope.yearOfBirth = '';
		$scope.age = function () {	
			if ($scope.yearOfBirth > 0){
				var currDate = new Date();
				var currentYear = currDate.getFullYear();
				var age = currentYear - $scope.yearOfBirth;
				$log.debug('Age of the user: ', age);
				return age;
			}
		};
	});


angular.bootstrap(document.getElementById("container"), ["myApplication"]);