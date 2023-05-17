import {  MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

// export const theme = MD3LightTheme

export const theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    text: '#000000',
    primary: '#121330',
    tint: '#FCFCFD',
    secondary: '#414757',
    border: '#C9DDEC',
  //   error: '#f13a59',
  //   success: '#00B386',
  //   google: '#2E7D32',
  },
}
