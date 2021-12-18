import { useState } from "react";
import Button from "./Button";

export default function BarChart() {
  const [stat, setStat] = useState([10, 20, 30, 40, 50]);

  const randomize = () => {
    const rand = () => {
      return Math.floor(Math.random() * 100);
    };
    setStat([rand(), rand(), rand(), rand(), rand()]);
  };

  return (
    <div>
      <div className="flex flex-row gap-6 p-4 h-40 items-end bg-slate-800 rounded-md">
        {stat.map((s) => (
          <span
            className=" w-6 rounded-full transition-height duration-500 ease-in-out bg-gradient-to-t from-[#FFCB79] to-[#FEA168] hover:from-[hsl(37,100%,80%)] hover:to-[hsl(23,99%,76%)] transition-colors"
            style={{ height: `${s}%` }}
            title={`${s}`}
          ></span>
        ))}
      </div>
      <Button onClick={randomize}>Randomize</Button>
    </div>
  );
}
