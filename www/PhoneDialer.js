var PhoneDialer = function() {}

PhoneDialer.prototype.dial = function(phnum) {
	var options = {};

	options.number = phnum;
    cordova.exec(null, null, "PhoneDialer", "dialPhone", [options]);
};

cordova.addConstructor(function() {
	if(!window.plugins)	{
		window.plugins = {};
	}

	if(!window.plugins.phoneDialer) {
    	window.plugins.phoneDialer = new PhoneDialer();
	}
});
