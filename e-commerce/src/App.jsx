// Components
import { HomePage } from './Pages/HomePage.jsx';
import { ChackoutPage } from './Pages/CheckoutPage.jsx';

// React Router
import { Routes, Route } from 'react-router';

// Styles
import './styles/general.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<ChackoutPage />} />
    </Routes>    
  );
}

export default App;
