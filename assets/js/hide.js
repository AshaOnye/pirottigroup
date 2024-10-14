// // Get the toggle button and gallery
// const toggleBtn = document.getElementById('toggleBtnz');
// // const toggleBtnIcon = document.getElements;
// const gallery = document.querySelector('.drop-imgz');
// var iconElement = document.getElementById('pluz');

// // Add click event listener to toggle button
// toggleBtn.addEventListener('click', function() {
//   // Toggle the visibility of the gallery
//   var toggleIcon = .getElementsById('pluz');
//   if (gallery.style.display === 'none' || gallery.style.display === '') {
//     gallery.style.display = 'flex';

//     toggleIcon.classList.remove('fa-plus');
//     toggleIcon.classList.add('fa-minus');
//   } else {
//     gallery.style.display = 'none';
//     // toggleBtn.textContent = '+';
//     toggleIcon.classList.remove('fa-plus');
//     toggleIcon.classList.add('fa-minus');
//   }
// });



function toggleAccordion(accordionId) {
  // Toggle visibility for elements within the specified accordion
  $('.' + accordionId + ' .drop-imgz').toggleClass('align-imgs');
  $('#' + accordionId + ' .pluz').toggleClass('d-none');
  $('#' + accordionId + ' .minus').toggleClass('d-none');
};



