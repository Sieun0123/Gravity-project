import React from "react";

export const ButtonPrimaryWith = ({ className, divClassName, frameClassName, hasIcon, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <div className={frameClassName}>
        <div className={divClassName}>{text}</div>
      </div>
    </button>
  );
};

