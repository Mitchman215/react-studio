export default function CartDisplay(props) {
  const cart = props.cart;
  function getTotal() {
    const rawTotal = cart.reduce((acc, val) => {
      return acc + val.price;
    }, 0);
    return Math.round(rawTotal * 100) / 100;
  }
  return (
    <div className='cart'>
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>
          {item.name}: <em>${item.price}</em>
        </p>
      ))}
      <h3>Total: ${getTotal()}</h3>
    </div>
  );
}
