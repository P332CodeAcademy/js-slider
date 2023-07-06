// @ts-nocheck

const sliderPopUps = document.querySelectorAll('.slider-tag');
const popUpImage = document.querySelector('.popup-image');
const popUp = document.querySelector('.popup');
const modalPrevBtn = document.querySelector('.modal-prev-btn');
const modalNextBtn = document.querySelector('.modal-next-btn');
const slider = document.querySelector('.images-slider');


sliderPopUps.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(element);
        popModal(element);

    })
});

function popModal(element) {
    popUpImage.setAttribute('src', element.getAttribute('href'))
    popUp.classList.remove('d-none');
    popUp.classList.add('active');
    prevModal(element);
    nextModal(element);
}

function popDownModal() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.add('d-none');
        }
    })
}
function prevModal(activeModal) {
    modalPrevBtn.addEventListener('click', function (e) {
        if (activeModal.previousElementSibling) {
            popModal(activeModal.previousElementSibling);
        }
    })
}
function nextModal(activeModal) {
    modalNextBtn.addEventListener('click', function (e) {
        if (activeModal.nextElementSibling) {
            popModal(activeModal.nextElementSibling);
        }
    })
}

function sliderActive() {
    const children = slider.children;
    for (var i = 0; i < slider.children.length; i++) {
        children[i].classList.remove("active-slider");
    }

    const middleIndex = Math.floor(children.length / 2);
    const middleChild = children[middleIndex - 1];

    middleChild.classList.add("active-slider");

    slider.insertBefore(children[children.length - 1], children[0]);
}




popDownModal();
setInterval(sliderActive, 3000);


