import classNames from "classnames";
import { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AccordionContext } from "./Accordion";

interface Props {
  title: string;
  children: any;
  index?: number;
}

export default function Pane({ title, children, index = 0 }: Props) {
  const { activePanes, togglePane } = useContext(AccordionContext);

  return (
    <div className="bg-slate-800">
      <div
        className="relative p-4 shadow-md cursor-pointer bg-slate-900 group"
        onClick={() => togglePane && togglePane(index)}
      >
        {title}
        <span className="absolute right-0 px-4 group-hover:text-green-200">
          <FaChevronDown
            className={classNames("transition-transform duration-250", {
              "rotate-180": activePanes.includes(index),
            })}
          />
        </span>
      </div>
      <div
        className={classNames(
          "max-h-0 overflow-clip px-4 transition-max-height duration-200 origin-top",
          {
            "max-h-screen py-4": activePanes.includes(index),
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}
