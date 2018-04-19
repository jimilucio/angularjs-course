var app = angular.module('myApplication');

app.directive('validDate', function ($timeout) {
  return {
    require: "ngModel",
    restrict: "A", // Attributes only
    link: function (scope, elem, attr, ctrl) {
        ctrl.$validators.validDate = function(value) {
            if (value === undefined || value === null || value === "") {
                return true;
            }
            
            if (moment(value, ["D/M/YYYY"], true)._isValid){
                return moment(value, ["D/M/YYYY"], true);
            }
            
        }
    }
  }
});