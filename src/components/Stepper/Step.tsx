import { useContext } from "react";
import { StepperContext } from "./Stepper";

type Props = {
  children: Array<JSX.Element> | JSX.Element | String;
  step?: number;
};

export default function Step({ children, step }: Props) {
  const { step: currentStep } = useContext(StepperContext);

  if (step !== currentStep) return null;

  return <div className="h-24 p-4">{children}</div>;
}
