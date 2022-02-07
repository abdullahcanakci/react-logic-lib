import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({});

type Props = {
  children: JSX.Element;
};

const initialCart = { products: {} };

function reducer(state: any, action: any) {
  const productId = action.productId;
  const count = state.products[productId] ?? 0;
  switch (action.type) {
    case "increment":
      return {
        products: {
          ...state.products,
          [`${productId}`]: count + 1,
        },
      };
    case "decrement":
      return {
        products: {
          ...state.products,
          [`${productId}`]: Math.max(count - 1, 0),
        },
      };
  }
}

export function useCart(id = null) {
  const { cart, setCart } = useContext(CartContext);

  return {
    count: () => cart.products[id] ?? 0,
    increment: () => setCart({ type: "increment", productId: id }),
    decrement: () => setCart({ type: "decrement", productId: id }),
    set: (count: number) => setCart({ type: "set", productId: id, count }),
    itemCount: () =>
      Object.values(cart.products)
        .filter((e) => !!e)
        .length.toString(),
  };
}

export default function CartManager({ children }: Props) {
  const [cart, setCart] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
