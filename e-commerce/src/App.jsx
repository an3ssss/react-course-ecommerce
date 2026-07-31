// React Router
import { Routes, Route } from 'react-router';

// Components
import { HomePage } from './Pages/HomePage.jsx';
import { ChackoutPage } from './Pages/Checkout/CheckoutPage.jsx';
import { OrdersPage } from './Pages/OrdersPage.jsx';
import { TrackingPage } from './Pages/TrackingPage.jsx';
import { NotFoundPage } from './Pages/NotFoundPage.jsx';

// Styles
import './styles/general.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<ChackoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>    
  );
}

export default App;
