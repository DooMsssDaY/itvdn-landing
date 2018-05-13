(function() {
	var openFormButton = document.querySelector('.arrow-down');
	var form           = document.querySelector('.form');

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
}());