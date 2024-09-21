import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WelcomePage />} /> {/* Updated for React Router v6 */}
        <Route path="/login" element={<LoginPage />} /> {/* Use 'element' instead of 'component' */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
