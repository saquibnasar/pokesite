import React from "react";
import { NavLink } from "react-router-dom";

export default function BtnComponent(props) {
  return (
    <>
      <div
        className={`col-12 col-xl-3 col-lg-4 col-sm-6 text-center ${props.text} text-lg-center`}
      >
        <NavLink
          className={`btn-empty d-inline-block text-decoration-none series ${props.btnType} ${props.btnFill} ${props.customSize}`}
          id={props.id}
          onClick={props.btnClick}
          to={props.link}
        >
          {props.genText}
        </NavLink>
      </div>
    </>
  );
}
