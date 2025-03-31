const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-close-btn');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(button => button.addEventListener('click', toggleModal));
modalBtnClose.forEach(button => button.addEventListener('click', toggleModal));
