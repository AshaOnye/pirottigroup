// let slideIndex = 0;
// showSlide(slideIndex);

// function nextSlide() {
//   showSlide(slideIndex += 1);
// }

// function prevSlide() {
//   showSlide(slideIndex -= 1);
// }

// function showSlide(n) {
//   const slides = document.querySelectorAll(".slide");
  
//   // Hide all slides
//   slides.forEach(slide => {
//     slide.style.display = "none";
//   });
  
//   // Loop back to the beginning if end reached
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
  
//   // Show current slide
//   slides[slideIndex].style.display = "block";  
// }



  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Initialize the slider by showing the first slide
  showSlide(currentSlide);

  // Set the slider to automatically move to the next slide every 3 seconds (3000ms)
  setInterval(nextSlide, 3000);

