import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme({
  typography: {
    fontSize: 16
  }
});

export const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={mdTheme}>
      { children }
    </ThemeProvider>
  );
}
