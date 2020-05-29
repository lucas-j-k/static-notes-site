/*
*
*	Front end scripts
*
*/

const indexElements = {
	menuButtons: document.querySelectorAll('.menuBar__button'),
	menu: document.querySelector('#mobile_menu'),
}


const toggleMenu = () => indexElements.menu.classList.toggle('mobileMenu--hidden');

indexElements.menuButtons.forEach(btn => btn.addEventListener('click', toggleMenu));

window.addEventListener('resize', () => {
	if(window.innerWidth <= 768) {
		indexElements.menu.classList.add('mobileMenu--hidden');
	}
});