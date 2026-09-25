import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}