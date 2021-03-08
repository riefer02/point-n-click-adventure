import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cycleView, cycleViewBack } from "../features/viewSlice";
import Canvas from "../components/utils/Canvas";
import BottomNavigation from "./utils/BottomNav";
import ProgressBar from "./utils/ProgressBar";
import ShiftButtons from "./utils/ShiftButtons";

export default function PrimaryDisplay() {
  const dispatch = useDispatch();
  const view = useSelector(({ view }) => view.views[0]);

  return (
    <div className="flex flex-col justify-between mx-auto w-full ">
      <h1 className="w-full mx-auto text-center text-3xl uppercase flex flex-col justify-center items-center">
        {view} Area
      </h1>
      <div className="w-full relative flex-grow">
        <Canvas />
      </div>

      <ShiftButtons />
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col justify-center mx-auto">
          <ProgressBar />
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}
