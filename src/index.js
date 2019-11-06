/* eslint-disable no-unused-vars */
import kbdKeys from './data/keys';
import './css/style.css';

const states = {
  Capslock: false,
  ShiftLeft: false,
  ShiftRight: false,
  CtrlLeft: false,
  CtrlRight: false,
  AltLeft: false,
  AltRight: false,
  current: null,
  lang: 'En',
  position: null,
};


const createEl = (tag, cls, addTo, tagValue, attr = null) => {
  const el = document.createElement(tag);
  if (cls !== null) {
    el.setAttribute('class', cls);
  }
  if (tagValue !== null) {
    el.innerText = tagValue;
  }
  if (attr !== null) {
    Object.keys(attr).forEach((item) => {
      el.setAttribute(item, attr[item]);
    });
  }
  addTo.append(el);
  return el;
};

const switchValueByLang = (code) => {

};

const shiftTransform = () => {
  // const domEl = document.querySelectorAll('div[data-event=0]');
};

const init = () => {
  const body = document.querySelector('body');
  const root = createEl('div', 'root', body, null);
  const wrapper = createEl('div', 'wrapper', root, null);
  const h1 = createEl('h1', null, wrapper, 'Virtual Keyboard');
  const outputField = createEl('textarea', null, wrapper, null);
  outputField.focus();
  const kbdContainer = createEl('div', 'keyboard', wrapper, null);

  kbdKeys.forEach((row) => {
    const rowSection = createEl('section', 'key-row', kbdContainer, null);
    row.forEach((keyObj) => {
      const {
        name, clsName, eventCode, type,
      } = keyObj;

      const clsGroup = `${clsName[0]} ${clsName[1]}`;

      const attributes = {
        'data-event': eventCode,
        'data-type': type,
      };

      createEl('div', clsGroup, rowSection, name, attributes);
    });
  });

  const onDownListener = (event) => {
    event.preventDefault();

    let someKey;
    let setValue;

    if (event.code) {
      global.console.log(event);
      someKey = document.querySelector(`div[data-event=${event.code}]`);
      setValue = event.key;
    }

    if (event.target.hasAttribute('data-event')) {
      global.console.log(event);
      someKey = event.target;
      setValue = someKey.innerText;
    }

    if (someKey) {
      if (states.current !== null) {
        states.current.classList.remove('active');
        states.current = null;
      }

      someKey.classList.add('active');
      states.current = someKey;

      if (parseInt(someKey.getAttribute('data-type'), 10) <= 1) {
        if (states.position == null) {
          outputField.value += setValue;
        } else {
          outputField.value = `${outputField.value.slice(0, states.position)}${setValue}${outputField.value.slice(states.position, outputField.textLength)}`;
          states.position += 1;
          outputField.setSelectionRange(states.position, states.position);
        }
      }

      if (parseInt(someKey.getAttribute('data-type'), 10) === 2) {
        if (setValue === 'Backspace') {
          if (states.position !== null) {
            outputField.value = `${outputField.value.slice(0, states.position - 1)}${outputField.value.slice(states.position, outputField.textLength)}`;
            states.position -= 1;
            outputField.setSelectionRange(states.position, states.position);
          } else {
            outputField.value = outputField.value.slice(0, -1);
          }
        }

        if (setValue === 'Enter') {
          outputField.value += '\n';
        }

        if (setValue === 'Tab') {
          outputField.value += ' '.repeat(4);
        }

        if (setValue === 'ArrowLeft') {
          if (states.position == null) {
            states.position = outputField.textLength - 1;
          } else {
            states.position -= 1;
          }
          outputField.setSelectionRange(states.position, states.position);
        }

        if (setValue === 'ArrowRight') {
          if (states.position !== null) {
            if (states.position === outputField.textLength) {
              states.position = null;
              outputField.setSelectionRange(outputField.textLength, outputField.textLength);
            } else {
              states.position += 1;
              outputField.setSelectionRange(states.position, states.position);
            }
          }
        }

        if (setValue === 'Delete') {
          if (states.position !== null) {
            outputField.value = `${outputField.value.slice(0, states.position)}${outputField.value.slice(states.position + 1, outputField.textLength)}`;
            outputField.setSelectionRange(states.position, states.position);
          }
        }

        if (setValue === ' ' || setValue === '') { // Space
          outputField.value += ' '.repeat(1);
        }
      }
    }
  };

  const onUpListener = (event) => {
    event.preventDefault();
    if (states.current !== null) {
      states.current.classList.remove('active');
      states.current = null;
    }
  };

  document.addEventListener('mousedown', onDownListener);
  document.addEventListener('mouseup', onUpListener);
  document.addEventListener('keydown', onDownListener);
  document.addEventListener('keyup', onUpListener);
};

init();
