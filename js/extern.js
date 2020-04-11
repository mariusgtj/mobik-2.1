// LazyLoad for images
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".photo"
});

if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

// Toggle Navbar
// function classToggle() {
//   const navs = document.querySelectorAll('.Navbar__Items')
  
//   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle')
//   .addEventListener('click', classToggle);

// WDS solution:
const toggleButton = document.getElementsByClassName('Navbar__Link-toggle')[0];
const navbarLinks = document.getElementsByClassName('Navbar__Items')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


