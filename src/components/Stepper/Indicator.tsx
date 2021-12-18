import classNames from "classnames";
import { useContext, useMemo } from "react";
import { StepperContext } from "./Stepper";

export default function Indicator() {
  const {
    step: activeStep,
    count,
    forward,
    backward,
  } = useContext(StepperContext);

  const steps = useMemo(() => {
    return Array.from(Array(count).keys()).map((x) => x + 1);
  }, [count]);

  return (
    <div className="flex flex-row justify-between text-sm bg-slate-900">
      <button className="w-24 p-2 hover:bg-slate-700" onClick={backward}>
        Previous
      </button>
      <div className="flex flex-row items-center  justify-center gap-[2px]">
        {steps.map((step) => (
          <span
            className={classNames(
              "inline-block w-1 h-1 bg-slate-600 rounded-full",
              { "bg-slate-400": step <= activeStep }
            )}
          />
        ))}
      </div>
      <button className="w-24 p-2 hover:bg-slate-700" onClick={forward}>
        Next
      </button>
    </div>
  );
}
