angular.module('myApplication')
.provider('deviceTypeManager', deviceTypeManager);

function deviceTypeManager() {

	this.DeviceType = '';

	this.isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		} else {
			return false;
		} 
	};
	
	this.$get = function(){
		
		var that = this;
		var service = {};
		
		service.getDeviceType = function(){
			return this.DeviceType;
		}

		return service;
	}

}