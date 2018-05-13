(function() {
	var me   = {};
	var form = document.querySelector('.form-container');
	var closeButton = null;

	function onClose(e) {
		e.preventDefault();

		me.close();
		closeButton.removeEventListener('click', onClose);
	}

	me.open = function() {
		form.classList.remove('is-hidden');

		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);
	};

	me.close = function() {
		form.classList.add('is-hidden');
	};

	me.isValid = function() {
		var fields = document.querySelectorAll('[data-valid="required"]');
		var email  = document.querySelector('[data-email]').value;
		var number = document.querySelector('[data-number]').value;

		if (false === me.isAllCompleted(fields)) {
			console.log('fill all fields');
			return false;
		}
		else if (false === ITVDN.validation.isEmail(email)) {
			console.log('wrong mail');
			return false;
		}
		else if (false === ITVDN.validation.isNumber(number)) {
			console.log('wrong number');
			return false;
		}

		return true;
	};

	me.isAllCompleted = function(data) {
		var result = true;

		for (var i = 0; i < data.length; i++) {
			if (false === ITVDN.validation.isNotEmpty(data[i].value)) {
				result = false;
				break;
			}
		}

		return result;
	};

	ITVDN.form = me;
}());