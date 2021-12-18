import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside";

export default function Layout({ children, components }) {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="bg-slate-600 text-white flex relative h-screen">
      <Aside
        toggled={toggled}
        setToggled={setToggled}
        components={components}
      />
      <div className="w-full overflow-y-auto grid place-items-center relative p-4 text-justify">
        <button
          className="absolute top-0 left-0 lg:hidden w-12 h-12 p-4 m-2 rounded-full cursor-pointer bg-slate-800  shadow-sm hover:shadow-lg hover:bg-slate-900 transition-colors duration-150 text-white"
          onClick={() => setToggled((e) => !e)}
        >
          <FaBars className="w-full h-full" />
        </button>
        <React.Suspense fallback={<>....</>}>
          <Routes>
            {components.map((component) => (
              <Route
                path={component.path}
                key={component.path}
                index={component.index}
                element={<component.element />}
              />
            ))}
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}
