// React Router
import { Routes, Route } from 'react-router';

// Components
import { HomePage } from './Pages/HomePage.jsx';
import { ChackoutPage } from './Pages/CheckoutPage.jsx';
import { OrdersPage } from './Pages/OrdersPage.jsx';

// Styles
import './styles/general.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<ChackoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>    
  );
}

export default App;
