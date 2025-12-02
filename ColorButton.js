import React from "react";

export default function ColorButton({ color, onColorSelect }) {
  return (
    <button className="color-btn" onClick={() => onColorSelect(color)}></button>
  );
}
