// @ts-nocheck

import { popDownModal } from './modalFunctions.js';
import { sliderActive } from './slider.js';

export function render() {
    popDownModal();
    setInterval(sliderActive, 3500);
}



