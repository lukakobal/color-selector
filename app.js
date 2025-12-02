import React, { useState } from "react";
import "./styles.css";
import ColorButton from "./ColorButton";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  // funkcija ki jo bo child poklical
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: selectedColor }}>
      <h1>Izberi barvo 👇</h1>

      {/* parent pošlje funkcijo v child */}
      <ColorButton color="red" onColorSelect={handleColorChange} />
      <ColorButton color="green" onColorSelect={handleColorChange} />
      <ColorButton color="blue" onColorSelect={handleColorChange} />

      <p>Izbrana barva: {selectedColor}</p>
    </div>
  );
}
