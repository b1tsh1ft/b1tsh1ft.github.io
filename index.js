import './index.scss';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

/** Initialize MDC Web components. */
const greetButtonEl = document.querySelector('.greet-button');
MDCRipple.attachTo(greetButtonEl);

const fnameTextfield = new MDCTextField(document.querySelector('.fname-text-field'));
const lnameTextfield = new MDCTextField(document.querySelector('.lname-text-field'));

/** Custom javascript code. */
const greetMessageEl = document.querySelector('.greet-message');

greetButtonEl.addEventListener('click', () => {
  let name;
  if (fnameTextfield.value || lnameTextfield.value) {
    name = fnameTextfield.value + ' ' + lnameTextfield.value;
  } else {
    name = 'Anonymous';
  }
  greetMessageEl.textContent = `Hello, ${name}!`;
});

