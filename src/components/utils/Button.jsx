import React from "react";
import { useDispatch } from "react-redux";
import { toggleLoad } from "../../features/loadSlice";
import "./Button.css";

export default function Button() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleLoad())}
      href="!"
      className="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
      data-text="Toggle"
    >
      <span className="align-middle">t</span>
      <span className="align-middle">o</span>
      <span className="align-middle">g</span>
      <span className="align-middle">g</span>
      <span className="align-middle">l</span>
      <span className="align-middle">e</span>
    </button>
  );
}
