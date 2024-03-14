import './App.css';
import { useState } from 'react';
import bakeryData from './assets/bakery-data.json';
import BakeryItem from './components/BakeryItem';
import CartDisplay from './components/CartDisplay';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + '/' + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <main className='App'>
      <section>
        <h1>My Bakery</h1>
        <div className='bakeryItems'>
          {bakeryData.map((item, index) => (
            <BakeryItem item={item} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <CartDisplay cart={cart} />
    </main>
  );
}

export default App;
