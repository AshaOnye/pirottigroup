let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("slideone");
  if (n < 0) { slideIndex = slides.length - 1 }
  if (n >= slides.length) { slideIndex = 0 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.querySelector('.preev').addEventListener('click', function() {
  showSlides(--slideIndex);
});

document.querySelector('.neext').addEventListener('click', function() {
  showSlides(++slideIndex);
});

