import React from "react";
import { useDispatch } from "react-redux";
import { cycleView, cycleViewBack } from "../../features/viewSlice";

export default function ShiftButtons() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          dispatch(cycleViewBack());
        }}
        className="button button--nina px-5 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
      >
        Shift Backwards
      </button>
      <button
        onClick={() => {
          dispatch(cycleView());
        }}
        className="button button--nina px-5 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
      >
        Shift Forward
      </button>
    </div>
  );
}
