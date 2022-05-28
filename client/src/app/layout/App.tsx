import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Catalog } from '../../features/catalog/Catalog';
import { Header } from './Header';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const paletteType = darkTheme ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: { default: !darkTheme ? '#eaeaea' : '#121212' },
    },
  });
  const setDarkModeHandler = () => {
    setDarkTheme(prev => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setDarkModeHandler={setDarkModeHandler} darkTheme={darkTheme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
