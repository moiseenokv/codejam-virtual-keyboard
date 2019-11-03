const kbdKeys = [
  [
    {
      name: '`',
      primaryValue: ['`', 'ё'],
      secondaryValue: ['~', 'Ё'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Backquote',
    },
    {
      name: '1',
      primaryValue: ['1', '1'],
      secondaryValue: ['!', '!'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit1',
    },
    {
      name: '2',
      primaryValue: ['2', '2'],
      secondaryValue: ['@', '"'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit2',
    },
    {
      name: '3',
      primaryValue: ['3', '3'],
      secondaryValue: ['#', '№'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit3',
    },
    {
      name: '4',
      primaryValue: ['4', '4'],
      secondaryValue: ['$', ';'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit4',
    },
    {
      name: '5',
      primaryValue: ['5', '5'],
      secondaryValue: ['%', '%'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit5',
    },
    {
      name: '6',
      primaryValue: ['6', '6'],
      secondaryValue: ['^', ':'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit6',
    },
    {
      name: '7',
      primaryValue: ['7', '7'],
      secondaryValue: ['&', '?'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit7',
    },
    {
      name: '8',
      primaryValue: ['8', '8'],
      secondaryValue: ['*', '*'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit8',
    },
    {
      name: '9',
      primaryValue: ['9', '9'],
      secondaryValue: ['(', '('],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit9',
    },
    {
      name: '0',
      primaryValue: ['0', '0'],
      secondaryValue: [')', ')'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Digit0',
    },
    {
      name: '-',
      primaryValue: ['-', '-'],
      secondaryValue: ['_', '_'],
      className: ['one', ''],
      type: 0,
      eventCode: 'Minus',
    },
    {
      name: '+',
      primaryValue: ['+', '+'],
      secondaryValue: ['=', '='],
      className: ['one', ''],
      type: 0,
      eventCode: 'Equal',
    },
    {
      name: 'Backspace',
      primaryValue: ['Backspace', 'Backspace'],
      secondaryValue: null,
      className: ['two', ''],
      type: 1,
      eventCode: 'Backspace',
    },
  ],
  [
    {
      name: 'Tab',
      primaryValue: ['Tab', 'Tab'],
      secondaryValue: null,
      className: ['one-one-half', 'l'],
      type: 1,
      eventCode: 'Tab',
    },
    {
      name: 'q',
      primaryValue: ['q', 'й'],
      secondaryValue: null,
      className: ['one', ''],
      type: 0,
      eventCode: 'KeyQ',
    },
    {
      name: 'w',
      primaryValue: ['w', 'ц'],
      secondaryValue: null,
      className: ['one', ''],
      type: 0,
      eventCode: 'KeyW',
    },
    {
      name: 'e',
      primaryValue: ['e', 'у'],
      secondaryValue: null,
      className: ['one', ''],
      type: 0,
      eventCode: 'KeyE',
    },
  ],
  [],
  [],
  [],
];

export default kbdKeys;

// value[eng; ru], className, type[oper(a,b,c), func(shift alt ...)],
// second[value while using Shift], event-code, capslock[true, false], shift[true, false]
