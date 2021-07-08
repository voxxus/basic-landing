const scroll = document.querySelector(".scroll");
const scrollPosition = 100;

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".panel__menu");
const menuItems = document.querySelectorAll(".panel__item");
const hamburgerDisplay = getComputedStyle(hamburger).display;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
	if (getTop() > scrollPosition) {
		scroll.classList.add("scroll--visible");
	} else {
		scroll.classList.remove("scroll--visible");
	}
});

scroll.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((item) => {
	if (hamburgerDisplay === "flex") {
		item.addEventListener("click", toggleMenu);
	}
});

function toggleMenu() {
	hamburger.classList.toggle("hamburger--active");
	menu.classList.toggle("panel__menu--active");
}
