import { textError } from './error.js';

// Setup the new Howl.
const sound = new Howl({
  src: ['./src/sound/timer.mp3']
});

export default function timer(time, button) {

    const dateCalcResult = document.getElementById("datecalc__result");
    let timeInterval;

    button.addEventListener('click', (event) => {
        dateCalcResult.innerHTML = '';
        event.preventDefault();

        if(event.target.innerText == 'Старт') {
            if (!time.valueAsNumber) {
                dateCalcResult.innerHTML = textError('Задайте время для таймера');
                return;
            }
            event.target.innerText = 'Пауза';
            timeInterval = setInterval(() => {
                if (time.valueAsNumber) {
                    time.valueAsNumber -= 1000;
                    if (!time.valueAsNumber) {
                        button.innerText = 'Старт';
                        sound.play();
                        clearInterval(timeInterval);
                    }
                } 
            }, 1000);
        } else {  
            event.target.innerText = 'Старт';
            clearInterval(timeInterval);
        }
    });
}