// let slideIndex = 0;
// const slides = document.querySelectorAll('.slidez');
// const slider = document.querySelector('.slide-list');

// function showSlide(n) {
//   slideIndex = (n + slides.length) % slides.length;
//   slider.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// function nextSlide() {
//   showSlide(slideIndex + 1);
// }

// function prevSlide() {
//   showSlide(slideIndex - 1);
// }

// let autoPlayInterval;

// function startAutoPlay() {
//   autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
// }

// function stopAutoPlay() {
//   clearInterval(autoPlayInterval);
// }

// // Start auto-play when page loads
// startAutoPlay();

// // Stop auto-play when mouse enters the slider container
// slider.addEventListener('mouseenter', stopAutoPlay);

// // Resume auto-play when mouse leaves the slider container
// slider.addEventListener('mouseleave', startAutoPlay);

let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  
  // Loop back to the beginning if end reached
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  // Show current slide
  slides[slideIndex].style.display = "block";  
}

