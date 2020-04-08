// LazyLoad for images
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".photo"
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

// Toggle Navbar
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);



