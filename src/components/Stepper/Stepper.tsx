import React, { createContext, useMemo, useState } from "react";
import Step from "./Step";
import Indicator from "./Indicator";

const StepperContext = createContext<{
  step: number;
  forward?: () => void;
  backward?: () => void;
  count: number;
}>({ step: 0, count: 0 });

export { StepperContext };

type Props = {
  children: Array<JSX.Element>;
  canAdvance?: () => boolean;
  onComplete?: () => void;
};

export default function Stepper({
  children: originalChildren,
  canAdvance,
  onComplete,
}: Props) {
  const [step, setStep] = useState(1);

  const { count, children } = useMemo(() => {
    let stepCount = 0;
    const elements = React.Children.map(originalChildren, (child) => {
      if (child.type == Step) {
        return React.cloneElement(child, {
          ...child.props,
          step: ++stepCount,
        });
      }
      return child;
    });
    return { count: stepCount, children: elements };
  }, [originalChildren]);

  const forward = () => {
    if (!canAdvance || canAdvance()) {
      setStep((x) => Math.min(count, x + 1));
    }

    if (count == step) {
      alert("Stepper Completed");
    }
  };

  const backward = () => {
    setStep((x) => Math.max(1, x - 1));
  };

  return (
    <StepperContext.Provider value={{ step, count, forward, backward }}>
      {children}
    </StepperContext.Provider>
  );
}
