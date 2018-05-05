(function() {
	var openFormButton = document.querySelector('.arrow-down');

	if (null !== openFormButton) {
		openFormButton.addEventListener('click', function() {
			form.open();
		})
	}
})();