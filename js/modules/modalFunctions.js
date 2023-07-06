// @ts-nocheck
import { popUpImage, popUp, modalPrevBtn, modalNextBtn } from './consts.js';

export function popModal(element) {
    popUpImage.setAttribute('src', element.getAttribute('href'))
    popUp.classList.remove('d-none');
    popUp.classList.add('active');
    prevModal(element);
    nextModal(element);
}

export function popDownModal() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.add('d-none');
        }
    })
}

export function prevModal(activeModal) {
    modalPrevBtn.addEventListener('click', function (e) {
        if (activeModal.previousElementSibling) {
            popModal(activeModal.previousElementSibling);
        }
    })
}
export function nextModal(activeModal) {
    modalNextBtn.addEventListener('click', function (e) {
        if (activeModal.nextElementSibling) {
            popModal(activeModal.nextElementSibling);
        }
    })
}