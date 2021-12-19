import { useState } from "react";
import Accordion, { AccordionType } from "./Accordion";
import Pane from "./Pane";

export default function Index() {
  const [type, setType] = useState<AccordionType>(AccordionType.SINGLE);

  return (
    <div className="w-1/2 max-w-96">
      <div className="flex gap-2 p-4">
        <label>
          <input
            type="radio"
            name="type"
            value={AccordionType.SINGLE}
            checked={AccordionType.SINGLE == type}
            onChange={() => setType(AccordionType.SINGLE)}
          />
          Single
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value={AccordionType.MULTIPLE}
            checked={AccordionType.MULTIPLE == type}
            onChange={() => setType(AccordionType.MULTIPLE)}
          />
          Multiple
        </label>
      </div>
      <Accordion type={type}>
        <Pane title="Pane 1">Pane 1</Pane>
        <Pane title="Pane 2">Pane 2</Pane>
        <Pane title="Pane 3">Pane 2</Pane>
        <Pane title="Pane 4">Pane 2</Pane>
      </Accordion>
    </div>
  );
}
