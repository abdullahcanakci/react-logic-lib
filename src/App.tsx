import { lazy, useMemo } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Layout from "./Layout/Layout";

function App() {
  const components = useMemo(() => {
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
    ];
  }, []);

  return <Layout components={components} />;
}

export default App;
