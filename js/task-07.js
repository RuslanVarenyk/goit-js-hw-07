const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInputRangeChange);

function onInputRangeChange(event) {
    text.style.fontSize = `${Number(input.value)}px`;
}