let slideClassName;
function reply_click(clicked_id) {
  console.log("Btn clicked!");
  switch (+clicked_id) {
    case 1:
      slideClassName = "cls1"
      break;
    case 2:
      slideClassName = "cls2";
      break;
    case 3:
      slideClassName = "cls3";
      break;
    case 4:
      slideClassName = "cls4"
      break;
    case 5:
      slideClassName = "cls5";
      break;
    case 6:
      slideClassName = "cls6";
      break;
  }
  console.log(slideClassName);


  if (document.querySelector('div.wrap').style.display = 'none') {
    document.querySelector('div.wrap').style.display = "block";
}
  console.log("Am deschis div ul wrap");


  initSlider();
  startSlide();
}

// Declar variabilele (situatia in care am mai multe clase de poze):
let sliderImages,
arrowLeft,
arrowRight,
current;

// Init slider
// Mai intai verific daca exista sliderImages:
function initSlider () {
  if (sliderImages) {
    sliderImages[current].style.display = 'none';
    
    arrowLeft = null;
    arrowRight = null;
    sliderImages = null;
  }

  // Apoi selectez ce elem sa mi apara in imagine. Atentie la propoz urmatoare:
  sliderImages = document.querySelectorAll('div.' + slideClassName);
  console.log(sliderImages)
      // Explicatie:
          // Obtin un arr(?!) cu foto din clasa selectata, dupa care 
          // stabilesc indexul celei pe care doresc sa o afisez 

  arrowLeft = document.querySelector("#arrow-left");
  console.log("Arrow-left selected!");
        // Functioneaza!!!
  arrowRight = document.querySelector("#arrow-right");
  console.log("Arrow-right selected!");
        // Functioneaza!!!

  // current va fi o variabila folosita la a determina indexul foto pe care o voi afisa
  current = 0;

  // pt a evita Memory Leaks, la initierea slid ului, fac stergerea din memorie a referintelor anterioare:
  clearArrowEvents();

  initArrowEvents();
  // console.log("La deschidere slider poze: " + current);
}

  // FFF imp: ca si la foto, si la arrow tb sa resetez, adica sa sterg evenimentele anterioare!!!

//Clear previous events from memory
function clearArrowEvents () {
  arrowLeft.removeEventListener('click', arrowLeftClickHandler);
  arrowRight.removeEventListener('click', arrowRightClickHandler);
}

// Init new events for the arrow btns
      /* 
      Att!!!!
      Aici nu se va apela(invoca) `arrowLeftClickHandler`, ci doar se paseaza ca parametru(fara `()`),
      astfel incal, atunci cand are loc un `click` event, sa stie ce functie sa `apeleze`.
      @see { callback functions }
      */
function initArrowEvents () {    
  arrowLeft.addEventListener('click', arrowLeftClickHandler);
  arrowRight.addEventListener('click', arrowRightClickHandler);
}

// Urm 2 setari importante: ma aflu la extremitatile listei si stabilesc ce tb sa fac in aceasta situatie
// Setez CURRENT daca ma aflu la inceputul listei de img, adica index=0 (deci nu mai pot sa scad, fiind treaba lui LEFT btn)
function arrowLeftClickHandler() {
  if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
}

// Setez CURRENT daca ma aflu la sfarsitul listei de img, adica index=arr.length-1
function arrowRightClickHandler() {
  if (current === sliderImages.length - 1) {
      current = -1;
    }
  slideRight();
}

// Show prev
function slideLeft() {
  console.log("La click stanga: " + current);
  resetImg();
  
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() { 
  console.log("La click dreapta: " + current);   
  resetImg();
  // console.log("Current mom inainte de indentare: "+current);
  sliderImages[current + 1].style.display = "block";  
  current++;
  // console.log("Current mom dupa indentare: "+current) ;
}

// Clear all images
function resetImg() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Start slider
// Aleg prima imagine -- sliderImages[0] -- care vreau sa fie afis la clk pe btn
function startSlide() {
  resetImg();
  sliderImages[0].style.display = "block";
}

// Fc de inchidere slider
function closeSlider() {
  // document.querySelector('div.wrap').style.display = 'none';
  if (document.querySelector('div.wrap').style.display = 'block') {
    document.querySelector('div.wrap').style.display = "none";
}
  console.log("Am inchis div ul cu img");
}
