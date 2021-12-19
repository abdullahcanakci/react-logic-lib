import { lazy, useMemo } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Layout from "./Layout/Layout";

interface Component {
  title: string;
  path: string;
  index?: boolean;
  element: any;
}
export type { Component };

function App() {
  const components: Array<Component> = useMemo(() => {
    return [
      {
        title: "Index",
        path: "",
        index: true,
        element: lazy(() => import("./components/Index")),
      },
      {
        title: "Avatar Picker",
        path: "/avatar-picker",
        element: lazy(() => import("./components/AvatarPicker")),
      },
      {
        title: "Bar Chart",
        path: "/bar-chart",
        element: lazy(() => import("./components/BarChart")),
      },
      {
        title: "Stepper",
        path: "/stepper",
        element: lazy(() => import("./components/Stepper")),
      },
      {
        title: "Accordion",
        path: "/accordion",
        element: lazy(() => import("./components/Accordion")),
      },
    ];
  }, []);

  return <Layout components={components} />;
}

export default App;
