var app = angular.module('myApplication');

app.directive('header', ['$transitions','$state',headerDirective]);


function headerDirective($transitions, $state){
	return {
    restrict: 'E',
    templateUrl: '/app/shared/header/header.template.html',
    link: function($scope) {
			console.log($transitions, $state);
			$transitions.onStart({}, function(transition) {
				$scope.currentPath = transition.to().name;
				console.log($scope.currentPath);
			});
		}
  };
}