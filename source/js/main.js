(function() {
	var openFormButton = document.querySelector('.arrow-down');
	var form           = document.querySelector('.form');
	var nav            = document.querySelector('.nav');

	if (null !== openFormButton) {
		openFormButton.addEventListener('click', function() {
			ITVDN.form.open();
		})
	}

	if (null !== form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();

			if (true === ITVDN.form.isValid()) {
				console.log('All is well');
			}
			else {
				console.log('All is not well');
			}
		});
	}

	if (null !== nav) {
		nav.addEventListener('click', function(e) {
			var target = e.target;

			if ('a' !== target.tagName.toLocaleLowerCase()) {
				return;
			}

			e.preventDefault();

			ITVDN.navigation.toggleToActiveLink(target);
		})
	}
}());