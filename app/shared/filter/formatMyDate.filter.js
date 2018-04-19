var app = angular.module('myApplication');
app.filter('dateformat', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input) {

    var output;

		// Do filter work here (10/10/1980)
		output = moment(input, "DD/MM/YYYY").format('LLLL');

    return output;

  }

});