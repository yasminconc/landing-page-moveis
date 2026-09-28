import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import { GlobalStyles } from './styles/GlobalStyles';
import OurHistory from './pages/ourHistory/OurHistory';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-history" element={<OurHistory />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}