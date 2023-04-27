//Script Index
const container = document.querySelector('#container');
const btnMenu = document.querySelector('#btn-menu');
const verifyWidthDevice = () => {
	window.innerWidth <= 768 ? container.classList.remove('active') : container.classList.add('active');
}

window.addEventListener('DOMContentLoaded', verifyWidthDevice);
window.addEventListener('resize', verifyWidthDevice);

btnMenu.addEventListener('click', () => {
	container.classList.toggle('active');
});

//Script de Configuración
function downloadJSAtOnload() {
	var element = document.createElement("script");
	// Your scripts would go inside this defer.js
	// Use case would be "enhancements" like animations, share buttons, etc.
	element.src = "js/defer.js";
	document.body.appendChild(element);
	}
	if (window.addEventListener)
	window.addEventListener("load", downloadJSAtOnload, false);
	else if (window.attachEvent)
	window.attachEvent("onload", downloadJSAtOnload);
	else window.onload = downloadJSAtOnload;