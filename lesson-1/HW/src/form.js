function initForm (form, renderPlace) {
    let showForm = document.querySelector(renderPlace);
    showForm.innerHTML = '';
    showForm.innerHTML = form;
}

const timerForm = `
    <h3>Таймер</h3>
    <label>
        <strong>Установите время таймера:</strong>
        <input type="time" id="setTime" value="00:00" step="1000"/>
    </label>
    <button id="start">Старт</button>
    <button id="clear">Сброс</button>
    <p id="datecalc__result"></p>
`;

const dateCalcForm = `    
    <h3>Калькулятор дат</h3>
    <label>
        <strong>Первая дата:</strong>
        <input type="date" name="firstDate" />
    </label>
    <label>
        <strong>Вторая дата:</strong>
        <input type="date" name="secondDate" />
    </label>
    <button type="submit">Расчитать промежуток</button>
    <p id="datecalc__result"></p>
`;


export { initForm, dateCalcForm, timerForm };