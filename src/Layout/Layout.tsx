import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import { Component } from "../App";
import Aside from "./Aside";

export default function Layout({
  components,
}: {
  components: Array<Component>;
}) {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="bg-slate-600 text-white flex relative h-screen">
      <Aside
        toggled={toggled}
        setToggled={setToggled}
        components={components}
      />
      <div className="w-full overflow-y-auto grid place-items-center relative text-justify overflow-x-hidden">
        <button
          className="absolute top-0 left-0 lg:hidden w-12 h-12 p-4 m-2 rounded-full cursor-pointer bg-slate-800  shadow-sm hover:shadow-lg hover:bg-slate-900 transition-colors duration-150 text-white"
          onClick={() => setToggled((e) => !e)}
        >
          <FaBars className="w-full h-full" />
        </button>
        <div className="grid place-items-center w-24 h-24  rotate-45 absolute top-0 right-0">
          <a
            href="https://github.com/abdullahcanakci/react-logic-lib"
            className="w-48  ml-[-3rem] py-1 text-xs bg-red-400 text-center hover:bg-red-500  transition-colors duration-200shadow-sm hover:shadow-lg cursor-pointer"
            target="_blank"
          >
            Check On Github
          </a>
        </div>
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
