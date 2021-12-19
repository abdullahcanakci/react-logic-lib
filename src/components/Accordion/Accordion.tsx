import React, { createContext, useState } from "react";

enum AccordionType {
  SINGLE,
  MULTIPLE,
}

type Props = {
  type: AccordionType;
  children: JSX.Element | Array<JSX.Element>;
};

const AccordionContext = createContext<{
  activePanes: Array<number>;
  togglePane: null | ((pane: number) => void);
}>({ activePanes: [], togglePane: null });

export { AccordionContext, AccordionType };

export default function Accordion({
  type = AccordionType.SINGLE,
  children,
}: Props) {
  const [state, setState] = useState<number[]>([]);

  const togglePane = (pane: number) => {
    if (pane == null) return;
    setState((panes) => {
      const paneIndex = panes.indexOf(pane);

      if (paneIndex < 0) {
        // Pane is closed need to open it
        if (type == AccordionType.SINGLE) {
          return [pane];
        }
        return [...panes, pane];
      }
      // close the pane
      return [...panes.filter((e) => e != pane)];
    });
  };

  return (
    <div className="rounded-md overflow-clip">
      <AccordionContext.Provider
        value={{ activePanes: state, togglePane: togglePane }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { ...child.props, index })
        )}
      </AccordionContext.Provider>
    </div>
  );
}
