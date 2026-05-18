import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import CatPage from './Pages/CatPage';
import OwnerPage from './Pages/OwnerPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatPage />} />
        <Route path="/owner" element={<OwnerPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;