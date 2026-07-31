// Components
import { HomePage } from './Pages/HomePage.jsx';

// React Router
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>Test</div>} />
    </Routes>    
  );
}

export default App;
