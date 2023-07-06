// @ts-nocheck
import { sliderPopUps, slider } from './consts.js';
import { popModal } from './modalFunctions.js';

function addPopModal() {
    sliderPopUps.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            popModal(element);
        })
    });
}

export function sliderActive() {
    const children = slider.children;
    for (var i = 0; i < slider.children.length; i++) {
        children[i].classList.remove("active-slider");
    }
    const middleIndex = Math.floor(children.length / 2);
    const middleChild = children[middleIndex - 1];

    middleChild.classList.add("active-slider");

    slider.insertBefore(children[children.length - 1], children[0]);
}

addPopModal();