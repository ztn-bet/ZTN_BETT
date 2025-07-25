import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Dashboard from './pages/Dashboard';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
