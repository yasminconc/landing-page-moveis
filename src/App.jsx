import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/home/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  );
}