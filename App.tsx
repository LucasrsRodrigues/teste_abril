import React from 'react';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold
} from '@expo-google-fonts/source-sans-pro';

import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  const [loadedFonts] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold
  });

  if (!loadedFonts) {
    return <></>
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
