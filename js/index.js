/*
*
*	Front end scripts
*
*/

const elements = {
	menuButtons: document.querySelectorAll('.menuBar__button'),
	menu: document.querySelector('#mobile_menu'),
}


const toggleMenu = () => elements.menu.classList.toggle('mobileMenu--hidden');

elements.menuButtons.forEach(btn => btn.addEventListener('click', toggleMenu));

window.addEventListener('resize', () => {
	if(window.innerWidth <= 768) {
		elements.menu.classList.add('mobileMenu--hidden');
	}
});