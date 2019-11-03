/* eslint-disable no-unused-vars */
import kbdKeys from './data/keys';
import './css/style.css';

const createEl = (tag, cls, addTo, tagValue) => {
  const el = document.createElement(tag);
  if (cls !== null) {
    el.setAttribute('class', cls);
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
  const kbdContainer = createEl('div', 'keyboard', wrapper, null);

  kbdKeys.forEach((row) => {
    const rowSection = createEl('section', 'key-row', kbdContainer, null);
    row.forEach((key) => {
      const clsGroup = `${key.clsName[0]} ${key.clsName[1]}`;
      const keyDiv = createEl('div', clsGroup, rowSection, key.name);
    });
  });
};

init();
