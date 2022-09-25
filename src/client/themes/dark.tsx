import { rgba, hsla } from 'polished';

const colors = {
  primary: '#f26931',
  primaryLight: '#fca91d',
  primaryDark: '#a53001',

  gray0: '#a8a9ad',
  gray1: '#777777',
  gray2: '#dfdfdf',
  gray3: '#d4d4d4',
  gray4: '#555555',
  gray5: '#37352f',
  gray6: '#ededed',

  black: '#231f20',
  white: '#ffffff',

  shadow: '0 2px 4px -1px rgba(57,76,96,0.15)',

  border: rgba(255, 255, 255, 0.1), //'#e0e3e7',
  pageBg: '#121212', //'#18191a',
  modalBg: rgba(255, 255, 255, 0.2),
  modalContainerBg: '#121212',
  dropdownBg: '#121212',

  labelColor: '#ffffff',
  iconColor: '#ffffff',
  // labelColor: rgba(255, 255, 255, 0.8),
  // iconColor: rgba(255, 255, 255, 0.8),
  formFieldBg: 'hsla(0, 100%, 100%, 0.05)',
  iconBg: 'hsla(0, 100%, 100%, 0.05)',
  cardBg: 'hsla(0, 100%, 100%, 0.15)', //'hsla(0, 100%, 100%, 0)',
  listItemBg: 'hsla(0, 100%, 100%, 0.05);',
  mainTextColor: rgba(255, 255, 255, 1),
  subTextColor: rgba(255, 255, 255, 0.7),

  // for forms
  formLabelColor: '#505f79',
  fieldLabelColor: '#c4c4c4',
  inputBgColor: 'hsla(0, 100%, 100%, 0.05)',
  inputBorderColor: '#333639',
  footerTextColor: '#37352f',

  hover: 'hsla(0, 100%, 100%, 0.05);',
};

const shadows = {
  //bigCard: '0 2px 4px -1px rgba(57,76,96,0.15)', //'0 8px 32px 0 rgba(255, 255, 255, 0.1)', //rgb(165, 48, 1, 0.8)
  //bigCard: '0px 2px 8px 0px hsla(0,100%,100%,0.1)',
  icon: '0px 1px 1px 0px hsla(0,0%,0%,0.14), 0px 2px 1px -1px hsla(0,0%,0%,0.12), 0px 1px 3px 0px hsla(0,0%,0%,0.2)',
  bigCard:
    '0px 16px 24px 2px hsla(0,0%,0%,0.14), 0px 6px 30px 5px hsla(0,0%,0%,0.12), 0px 8px 10px -5px hsla(0,0%,0%,0.2)',

  smallCard:
    '0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)',
};

const darkTheme = { colors, shadows };

export default darkTheme;
