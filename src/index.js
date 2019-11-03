/* eslint-disable no-unused-vars */
import kbdKeys from './data/keys';
import './css/style.css';

const kbd = kbdKeys;

global.console.log(kbd);

const createEl = (tag, cls, addTo, tagValue) => {
  const el = document.createElement(tag);
  if (cls !== null) {
    el.classList.add(cls);
  }
  if (tagValue !== null) {
    el.innerText = tagValue;
  }
  addTo.append(el);
  return el;
};

const init = () => {
  const body = document.querySelector('body');
  const root = createEl('div', 'root', body, null);
  const wrapper = createEl('div', 'wrapper', root, null);
  const h1 = createEl('h1', null, wrapper, 'Virtual Keyboard');
  const outputField = createEl('textarea', null, wrapper, null);
  const kbdContainer = createEl('div', 'kbdContainer', wrapper, null);
};

init();
