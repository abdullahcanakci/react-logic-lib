import { useCart } from "./CartManager";

export default function Cart() {
  const { itemCount: ItemCount } = useCart();

  return (
    <div className="w-40 h-full text-center rounded-md bg-slate-700">
      <span>
        Total Items: <ItemCount />
      </span>
    </div>
  );
}
