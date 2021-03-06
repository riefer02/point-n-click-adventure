import React from "react";
import { useSelector } from "react-redux";

import Loader from "./components/utils/Loader";
import Button from "./components/utils/Button";
import PrimaryDisplay from "./components/PrimaryDisplay";
import "./App.css";

function App() {
  const isLoading = useSelector(({ load }) => load.loading);

  return (
    <div className="App">
      <div className="container h-screen flex flex-col justify-center items-center mx-auto">
        <div className="bg-indigo-200 w-full h-60">
          <PrimaryDisplay />
        </div>
        <div className="w-full">{isLoading && <Loader />}</div>
        <div className="my-10">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
