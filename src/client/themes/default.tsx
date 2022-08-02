import { grayscale, rgb, rgba, linearGradient } from 'polished';

const colors = {
  // primary: "#007fff",
  secondary: '#87cefa',
  primaryLightTheme: '#ffffff',
  secondaryLightTheme: '#f3f3f3',
  tertiaryLightTheme: '#f6f6f6',

  buttonTextColor1: '#fff',
  buttonTextColor2: '#666',
  buttonBgColor1: '#F26931',
  buttonBgColor2: '#f5f5f5',

  primary: '#F26931',
  primaryLight: '#FCA91D',
  primaryDark: '#A53001',
  gray: '#A8A9AD',
  black: '#231F20',
  white: '#FFF',

  gradient: linearGradient({
    colorStops: ['#A53001 0%', '#F26931 35%', '#FCA91D 100%'],
    toDirection: 'to top right',
    fallback: '#A53001',
  }),

  shadow: '0 2px 4px -1px rgba(57,76,96,0.15)',

  border: '#e0e3e7',
  background: '#fff',

  // for buttons
  btnPrimaryIdleFill: '#007fff',
  btnPrimaryIdleTint: '#fff',
  btnPrimaryDisabledFill: '#87cefa',
  btnPrimaryDisabledTint: '#fff',
  btnPrimaryHoverFill: '#007ba7',
  btnPrimaryHoverTint: '#fff',

  btnSecondaryIdleFill: '#f5f5f5',
  btnSecondaryIdleTint: rgba('#444', 0.8),
  btnSecondaryDisabledFill: '#f0f8ff',
  btnSecondaryDisabledTint: 'fff',
  btnSecondaryHoverFill: '#e5e5e5',
  btnSecondaryHoverTint: '#1a1a1a',

  // for icons
  iconPrimaryFill: '#007fff',
  iconHoverBackground: rgb(243, 246, 249),
  iconHoverBorder: rgb(224, 227, 231),
  iconDisabled: '#333',

  // for fonts
  grayFont: '#808080',

  // for inputs
  //input: "#f2f1ee",
  input: rgba(243, 246, 249, 0.6),

  fadeModalBg: rgba(0, 0, 0, 0.5),
  infoModal: rgba(0, 0, 0, 0.5),
  formModal: rgba(255, 255, 255, 0.5),
};

const stack = {
  modal: {
    info: 999,
    form: 5,
  },

  header: 3,
};

const fontFamilies = {};

const defaultTheme = {
  colors,
};

export default defaultTheme;
function deg(
  arg0: number,
  deg: any,
  arg2: string,
  arg3: number,
  arg4: string,
  arg5: number,
  arg6: string,
  arg7: number,
) {
  throw new Error('Function not implemented.');
}
