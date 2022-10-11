import { rgba } from 'polished';

const colors = {
  primary: '#f26931',
  primaryLight: '#fca91d',
  primaryDark: '#a53001',
  black: '#231f20',
  white: '#ffffff',
  border: '#333333',
  pageBg: '#121212',
  labelColor: rgba(255, 255, 255, 0.8),
  mainTextColor: rgba(255, 255, 255, 1),
  subTextColor: rgba(255, 255, 255, 0.7),

  //buttons
  buttonPrimaryColor: '#737373',
  buttonPrimaryDisabledColor: '#a6a6a6',
  buttonPrimaryDisabledBackground: '#404040',
  buttonPrimaryDisabledBorder: '#404040',

  buttonSecondaryColor: '#a6a6a6',
  buttonSecondaryBorder: '#333639',
  buttonSecondaryHoverColor: '#e6e6e6',
  buttonSecondaryHoverBorder: '#a8a8a8',

  //toggle button
  toggleButtonBorder: '#a8a9ad',

  //task list
  taskListBackground: '#1a1a1a',

  //task item
  taskNotCompleted: '#b3b3b3',
  taskCompleted: '#575656',
  taskHovered: '#ffffff',
  taskItemHovered: '#333333',
  taskItemBorder: '#404040',
  taskItemIcon: '#a8a9ad',

  //modals
  modalOverlayBackground: rgba(0, 0, 0, 0.5),
  modalCardBackground: '#262626',
  modalText: '#e6e6e6',
  modalTitle: '#e6e6e6',
  modalClose: '#a6a6a6',
  modalCloseHover: '#e6e6e6',

  //icons
  iconHoverBackground: '#333333',
  iconBorder: '#404040',
  iconColor: '#b3b3b3',

  //forms
  formCard: '#1a1a1a',
  formLabelColor: '#505f79',
  fieldLabelColor: '#a6a6a6',
  inputBgColor: rgba(0, 0, 0, 0.2),
  inputBorderColor: '#333333',
  inputHoverBorderColor: '#a8a8a8',
  footerTextColor: '#37352f',
  passwordIconColor: '#a8a9ad',

  //dropdown
  dropdownBg: '#121212',
  dropdownColor: '#b3b3b3',
  dropdownDisabled: '#575656',
  dropdownHover: '#333333',

  //toast
  toastColorSuccess: '#9f6000',
  toastBgSuccess: '#ffd997',
  toastButtonColorSuccess: '#9f6000',
  toastButtonHoverSuccess: '#ffcb72',
  toastColorError: '#d63301',
  toastBgError: '#ffccba',
  toastButtonColorError: '#d8000c',
  toastButtonHoverError: '#ffbaba',

  //scrollbar
  thumbColor: rgba(51, 51, 51, 0.5),
  thumbHoverColor: '#333333',
};

const darkTheme = { colors };

export default darkTheme;
