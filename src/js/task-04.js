const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButoon: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementButton.addEventListener('click', onDecrementButtonClick);
refs.incrementButoon.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick(event) {
    return refs.value.textContent = counterValue -= 1;
}
function onIncrementButtonClick(event) {
    return refs.value.textContent = counterValue += 1;
}