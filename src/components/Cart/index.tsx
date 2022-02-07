import Cart from "./Cart";
import CartManager from "./CartManager";
import Product from "./Product";

export default function Index() {
  return (
    <CartManager>
      <div className="flex gap-2">
        <div className="grid grid-cols-2 gap-4">
          <Product id={1} name="Product 1" />
          <Product id={2} name="Product 2" />
          <Product id={3} name="Product 3" />
        </div>
        <Cart />
      </div>
    </CartManager>
  );
}
