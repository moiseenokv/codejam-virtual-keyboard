/* eslint-disable no-unused-vars */
import kbdKeys from './data/keys';
import './css/style.css';

const states = {
  Capslock: false,
  ShiftLeft: false,
  ShiftRight: false,
  ControlLeft: false,
  ControlRight: false,
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

const switchLang = () => {
  const { lang } = states;
  if (lang === 'En') {
    kbdKeys.forEach((row) => {
      row.forEach((item) => {
        const { type, eventCode, primaryValue } = item;
        if (type <= 1) {
          const prRuVal = primaryValue[1];
          document.querySelector(`div[data-event="${eventCode}"]`).innerText = prRuVal;
        }
      });
    });
    states.lang = 'Ru';
  }

  if (lang === 'Ru') {
    kbdKeys.forEach((row) => {
      row.forEach((item) => {
        const { type, eventCode, primaryValue } = item;
        if (type <= 1) {
          const prEnVal = primaryValue[0];
          document.querySelector(`div[data-event="${eventCode}"]`).innerText = prEnVal;
        }
      });
    });
    states.lang = 'En';
  }
};

const shiftTransform = () => {
  const domEl = document.querySelectorAll('div[data-type="0"]');
  Object.values(domEl).forEach((item) => {
    item.classList.toggle('upper');
  });

  if (states.lang === 'En') {
    if ((states.ShiftLeft === true || states.ShiftRight === true)) {
      kbdKeys.forEach((row) => {
        row.forEach((item) => {
          const { type, eventCode, secondaryValue } = item;
          if (type === 1 && secondaryValue !== null) {
            const secEnVal = secondaryValue[0];
            document.querySelector(`div[data-event="${eventCode}"]`).innerText = secEnVal;
          }
        });
      });
    } else {
      kbdKeys.forEach((row) => {
        row.forEach((item) => {
          const { type, eventCode, primaryValue } = item;
          if (type === 1 && primaryValue !== null) {
            const secEnVal = primaryValue[0];
            document.querySelector(`div[data-event="${eventCode}"]`).innerText = secEnVal;
          }
        });
      });
    }
  }

  if (states.lang === 'Ru') {
    if ((states.ShiftLeft === true || states.ShiftRight === true)) {
      kbdKeys.forEach((row) => {
        row.forEach((item) => {
          const { type, eventCode, secondaryValue } = item;
          if (type === 1 && secondaryValue !== null) {
            const secRuVal = secondaryValue[1];
            document.querySelector(`div[data-event="${eventCode}"]`).innerText = secRuVal;
          }
        });
      });
    } else {
      kbdKeys.forEach((row) => {
        row.forEach((item) => {
          const { type, eventCode, primaryValue } = item;
          if (type === 1 && primaryValue != null) {
            const secRuVal = primaryValue[1];
            document.querySelector(`div[data-event="${eventCode}"]`).innerText = secRuVal;
          }
        });
      });
    }
  }
};

const init = () => {
  const body = document.querySelector('body');
  const root = createEl('div', 'root', body, null);
  const wrapper = createEl('div', 'wrapper', root, null);
  const h1 = createEl('h1', null, wrapper, 'Virtual Keyboard');
  const outputField = createEl('textarea', null, wrapper, null);

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
      someKey = document.querySelector(`div[data-event=${event.code}]`);
      setValue = event.key;
    }

    if (event.target.hasAttribute('data-event')) {
      someKey = event.target;
      setValue = someKey.innerText;
    }

    if (someKey) {
      if (someKey.getAttribute('data-event') === 'ShiftLeft'
      || someKey.getAttribute('data-event') === 'ShiftRight'
      || someKey.getAttribute('data-event') === 'ControlLeft'
      || someKey.getAttribute('data-event') === 'ControlRight'
      || someKey.getAttribute('data-event') === 'AltLeft'
      || someKey.getAttribute('data-event') === 'AltRight') {
        states.current = someKey;
        const keyID = someKey.getAttribute('data-event');
        if (states[keyID] === false) {
          states[keyID] = true;
          someKey.classList.add('reactive');
          if (someKey.getAttribute('data-event') === 'ShiftLeft' || someKey.getAttribute('data-event') === 'ShiftRight') {
            shiftTransform();
          }
        } else {
          states[keyID] = false;
          someKey.classList.remove('reactive');
          if (someKey.getAttribute('data-event') === 'ShiftLeft' || someKey.getAttribute('data-event') === 'ShiftRight') {
            shiftTransform();
          }
        }
      } else {
        if (states.current !== null) {
          states.current.classList.remove('active');
          states.current = null;
        }
        someKey.classList.add('active');
        states.current = someKey;
      }

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

      if (parseInt(someKey.getAttribute('data-type'), 10) === 3) {
        if (setValue === 'Alt') {
          if ((states.ControlLeft === true || states.ControlRight === true)
              && (states.AltLeft === true || states.AltlRight === true)) {
            switchLang();
            states.ControlLeft = false;
            states.ControlRight = false;
            document.querySelector('div[data-event="ControlLeft"]').classList.remove('reactive');
            document.querySelector('div[data-event="ControlRight"]').classList.remove('reactive');
            states.AltLeft = false;
            states.AltRight = false;
            document.querySelector('div[data-event="AltLeft"]').classList.remove('reactive');
            document.querySelector('div[data-event="AltRight"]').classList.remove('reactive');
          }
        }
      }
    }
  };

  const onUpListener = (event) => {
    event.preventDefault();
    if (states.current !== null && parseInt(states.current.getAttribute('data-type'), 10) <= 2) {
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
