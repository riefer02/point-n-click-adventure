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
      <div className="container flex flex-col justify-center items-center mx-auto">
        <PrimaryDisplay />
        <div className="fixed bottom-0 right-5">
          <div className="w-full">{isLoading && <Loader />}</div>
          <div className="my-5">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
