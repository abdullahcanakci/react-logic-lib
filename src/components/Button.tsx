interface Props {
  children: any;
  [x: string]: any;
}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="h-12 px-4 py-2 my-1 text-center rounded-full cursor-pointer bg-slate-800  shadow-sm hover:shadow-lg hover:bg-slate-900 transition-colors duration-150 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
