import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme();;

export const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={mdTheme}>
      { children }
    </ThemeProvider>
  );
}
