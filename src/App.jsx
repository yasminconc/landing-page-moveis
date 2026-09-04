import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Home from './pages/home/Home';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  );
}