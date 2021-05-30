const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    input.classList.length >= 1 ?
        onPresentClass() :
        onNotPresentClass();
}

function onNotPresentClass() {
    input.value.length === Number(input.dataset.length) ?
        input.classList.add('valid') :
        input.classList.add('invalid');
}

function onPresentClass() {
    input.value.length === Number(input.dataset.length) ?
        input.classList.replace('invalid', 'valid') :
        input.classList.replace('valid', 'invalid');
}