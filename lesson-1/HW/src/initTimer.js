import timer from './timer.js';

export default function initTimer () {

    if (document.querySelector('#setTime')) {
        const setTime = document.querySelector('#setTime');

        const StartBtn = document.querySelector('#start'),
              clearBtn = document.querySelector('#clear');

        clearBtn.addEventListener('click', (event) => {
            event.preventDefault();
            setTime.valueAsNumber = 0;
        });

        timer(setTime, StartBtn);

    }
}
