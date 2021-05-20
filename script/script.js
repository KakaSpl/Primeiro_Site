/*
Função para controlar transições de imagens no Slider
*/
let time = 3000,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slider img")
    max = imagens.length;


/*
Função para controlar Galeria de fotos (#portfolio)
*/    
function nextImage() {
    imagens[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex ++

    if(currentImageIndex >= max)
        currentImageIndex = 0
    
    imagens[currentImageIndex]
        .classList.add("selected")
}

function start(){
    setInterval(()=> {
        //troca imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página');
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/*
Função para controlar botão de retorno ao topo da página
*/
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}