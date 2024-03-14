// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
  const { name, description, price, image } = props.item;
  return (
    <div className='BakeryItem' onClick={() => props.addToCart(props.item)}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}
