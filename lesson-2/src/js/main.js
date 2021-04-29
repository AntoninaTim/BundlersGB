import { initForm, dateCalcForm, timerForm } from './form.js';
import datecalc from "./datecalc.js";
import initTimer from "./initTimer.js";
import '../scss/style.scss';

datecalc();

const btnDateCalc = document.querySelector('.btn__date'),
      btnTimer = document.querySelector('.btn__timer');


btnDateCalc.addEventListener('click', () => {
    initForm(dateCalcForm, '#datecalc');
    initDateCalc();
});

btnTimer.addEventListener('click', () => {
    initForm(timerForm, '#datecalc');
    initTimer();
}); 