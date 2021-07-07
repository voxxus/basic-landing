const scroll = document.querySelector(".scroll");
const scrollPosition = 100;

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
