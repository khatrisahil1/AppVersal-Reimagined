import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SnapshotPage from './pages/SnapshotPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import WidgetsPage from './pages/WidgetsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/snapshot" element={<Layout><SnapshotPage /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
          <Route path="/widgets" element={<Layout><WidgetsPage /></Layout>} />
          <Route path="/packages" element={<Layout><PricingPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;