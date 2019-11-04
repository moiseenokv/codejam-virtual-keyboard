/* eslint-disable no-unused-vars */
import kbdKeys from './data/keys';
import './css/style.css';

const createEl = (tag, cls, addTo, tagValue, attr = null) => {
  const el = document.createElement(tag);
  if (cls !== null) {
    el.setAttribute('class', cls);
  }
  if (tagValue !== null) {
    el.innerText = tagValue;
  }
  if (attr !== null) {
  }
  addTo.append(el);
  return el;
};

const getItemData = (keyItem) => {

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
        name, primaryValue, secondaryValue, clsName, type, eventCode,
      } = keyObj;
      const clsGroup = `${keyObj.clsName[0]} ${keyObj.clsName[1]}`;
      const keyDiv = createEl('div', clsGroup, rowSection, name);
      // global.console.log(keyDiv);
      keyDiv.addEventListener('click', () => {
        global.console.log('click', keyDiv.innerText);
      });
    });
  });
};

init();
