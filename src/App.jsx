import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import CatPage from './Pages/CatPage';
import OwnerPage from './Pages/OwnerPage';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Context/CartContext';
import CatDetailPage from './Pages/CatDetailPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cats" element={<CatPage />} />
          <Route path="/owner" element={<OwnerPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cats/:id" element={<CatDetailPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;