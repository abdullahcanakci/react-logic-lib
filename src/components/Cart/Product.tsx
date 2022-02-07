import { useCart } from "./CartManager";
import Button from "../Button";

export default function Product({ id, name }) {
  const { count: Count, increment, decrement } = useCart(id);

  return (
    <div className="p-4 rounded-md bg-slate-700">
      {name}
      <div className="flex items-center justify-center gap-2">
        <Button className="w-8" onClick={decrement}>
          -
        </Button>
        <span className="w-4 text-lg text-center align-middle">
          <Count />
        </span>
        <Button className="w-8" onClick={increment}>
          +
        </Button>
      </div>
    </div>
  );
}
