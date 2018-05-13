(function() {
	var me = {};

	me.isEmail = function(email) {
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

		return re.test(email)
	};

	me.isNumber = function(number) {
		var re = /^\d+$/;

		return re.test(number)
	};

	me.isNotEmpty = function(str) {
		return Boolean(str);
	};

	ITVDN.validation = me;
}());