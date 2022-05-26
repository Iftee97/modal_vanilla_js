'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', function () {
    showModal();

    closeModalBtn.addEventListener('click', function () {
        hideModal();
    });

    overlay.addEventListener('click', function () {
        hideModal();
    });
}));
