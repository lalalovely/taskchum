import { rgba } from 'polished';

const colors = {
  primary: '#f26931',
  primaryLight: '#fca91d',
  primaryDark: '#a53001',
  black: '#231f20',
  white: '#ffffff',
  border: rgba(0, 0, 0, 0.1),
  pageBg: '#f4f4f4',
  labelColor: rgba(0, 0, 0, 0.8),
  mainTextColor: rgba(0, 0, 0, 1),
  subTextColor: rgba(0, 0, 0, 0.7),

  //buttons
  buttonPrimaryColor: '#ffffff',
  buttonPrimaryDisabledColor: '#a6a6a6',
  buttonPrimaryDisabledBackground: '#d4d4d4',
  buttonPrimaryDisabledBorder: '#404040',

  buttonSecondaryColor: '#a6a6a6',
  buttonSecondaryBorder: '#a8a9ad',
  buttonSecondaryHoverColor: '#333333',
  buttonSecondaryHoverBorder: '#737373',

  //toggle button
  toggleButtonBorder: '#a8a9ad',

  //task list
  taskListBackground: '#ffffff',

  //task item
  taskNotCompleted: '#555555',
  taskCompleted: '#b3b3b3',
  taskHovered: '#000000',
  taskItemHovered: '#ededed',
  taskItemBorder: '#404040',
  taskItemIcon: '#a8a9ad',

  //modals
  modalOverlayBackground: rgba(0, 0, 0, 0.5),
  modalCardBackground: '#ffffff',
  modalText: '#e6e6e6',
  modalTitle: 'ededed',
  modalClose: '#a6a6a6',
  modalCloseHover: '#555555',

  //icons
  iconHoverBackground: '#ededed',
  iconBorder: '#404040',
  iconColor: rgba(0, 0, 0, 0.8),

  //forms
  formCard: '#ffffff',
  formLabelColor: '#505f79',
  fieldLabelColor: '#a6a6a6',
  inputBgColor: '#fafbfc',
  inputBorderColor: '#dfe1e6',
  inputHoverBorderColor: '#a8a8a8',
  footerTextColor: '#37352f',
  passwordIconColor: '#a8a9ad',
  buttonHoverBorder: '#a8a8a8',

  //dropdown
  dropdownBg: '#ffffff',
  dropdownColor: '#555555',
  dropdownDisabled: '#b3b3b3',
  dropdownHover: '#ededed',

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

const defaultTheme = {
  colors,
};

export default defaultTheme;
