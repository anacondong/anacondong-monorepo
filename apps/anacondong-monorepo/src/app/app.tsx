// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';
// importing the component from the library
import { Products } from '@anacondong-monorepo/products';
import { Orders } from '@anacondong-monorepo/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
}

export default App;
