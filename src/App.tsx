import './App.css';

import { Route, Routes } from 'react-router';
import HelloWorld from './app/hello-world';

import { Products } from '@products';
import { Orders } from '@orders';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
