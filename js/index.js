const sliderPopUps = document.querySelectorAll('.slider-tag');
const popUpImage = document.querySelector('.popup-image');
const popUp = document.querySelector('.popup');
const modalPrevBtn = document.querySelector('.modal-prev-btn');
const modalNextBtn = document.querySelector('.modal-next-btn');


console.log(popUpImage);
sliderPopUps.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        popModal(element);

    })
});

function popModal(element) {
    popUpImage.setAttribute('src', element.getAttribute('href'))
    console.log(element);
    popUp.classList.remove('d-none');
    popUp.classList.add('active');
}

function popDownModal() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.add('d-none');
        }
    })
}
popDownModal();

