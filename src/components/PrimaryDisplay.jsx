import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setView, cycleView, cycleViewBack } from "../features/viewSlice";

export default function PrimaryDisplay() {
  const dispatch = useDispatch();
  const view = useSelector(({ view }) => view.views[0]);

  return (
    <div className="flex flex-col justify-center mx-auto w-full h-full">
      <div className="w-full h-40 p-2"></div>
      <div className="w-full mx-auto text-center">{view} page</div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            dispatch(cycleViewBack());
          }}
          className="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
        >
          Shift Backwards
        </button>
        <button
          onClick={() => {
            dispatch(cycleView());
          }}
          className="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
        >
          Shift Forward
        </button>
      </div>
    </div>
  );
}
