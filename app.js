window.addEventListener('DOMContentLoaded', () => {
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
	const navLinkMenu = document.querySelectorAll('.nav-link');

	menu_btn.addEventListener('click', function () {
		if(menu_btn.classList.contains('is-active')){
			menu_btn.classList.remove('is-active');
			mobile_menu.classList.remove('is-active');
			document.body.style.overflowY = 'scroll';
		}else {
			menu_btn.classList.add('is-active');
			mobile_menu.classList.add('is-active');
			document.body.style.overflowY = 'hidden';
		}
	});

	navLinkMenu.forEach((element) => {
		element.addEventListener('click', () => {
			menu_btn.classList.remove('is-active');
			mobile_menu.classList.remove('is-active');
			document.body.style.overflowY = 'scroll';
		});
	});

});