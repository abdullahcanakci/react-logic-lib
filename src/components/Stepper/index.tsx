import Button from "../Button";
import Indicator from "./Indicator";
import Step from "./Step";
import Stepper from "./Stepper";

export default function Index() {
  return (
    <div className="rounded-md overflow-clip bg-slate-800 w-72">
      <Stepper>
        <Step>Step 1</Step>
        <Step>Step 2</Step>
        <Step>Step 3</Step>
        <Step>Step 4</Step>
        <Indicator />
      </Stepper>
    </div>
  );
}
