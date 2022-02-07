import classNames from "classnames";

interface Props {
  children: any;
  className?: string;
  [x: string]: any;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={classNames(
        "w-12 p-1 my-1 text-center text-white transition-colors duration-150 rounded-full shadow-sm cursor-pointer aspect-square bg-slate-800 hover:shadow-lg hover:bg-slate-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
