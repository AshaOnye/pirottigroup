const togglezBtn = document.querySelector('.togglez-btn')
const togglezBtnIcon = document.querySelector('togglez-btn i')
const dropmenuz = document.querySelector('.d-menu')

togglezBtn.onclick = function () {
    dropmenuz.classList.toggle('open')
    const isOpen = dropmenuz.classList.contains('open')

    togglezBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// const plusBtn = document.querySelector('.plus-btn')
// const plusBtnIcon = document.querySelector('plus-btn i')
// const dropImg = document.querySelector('.drop-imgz')

// PlusBtn.onclick = function () {
//     dropImg.classList.toggle('open')
//     const isOpen = dropImg.classList.contains('open')

//     plusBtnIcon.classList = isOpen
//     ? 'fa-solid fa-minus'
//     : 'fa-solid fa-plus'
// }



