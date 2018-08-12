// Using the dataset property, output the "data-hidden-message" data attribute.
const sourceEl = document.querySelector('.source');
const outputEl = document.querySelector('.output');


outputEl.innerHTML = sourceEl.dataset.hiddenMessage;