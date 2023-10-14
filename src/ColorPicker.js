import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors, setBgColor }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [showColors, setShowColors] = useState(false);

  return (
    <div className="ColorPicker">
      <button onClick={() => setShowColors(!showColors)}>
        {selectedColor || 'Pick a color'}
      </button>
      {showColors && (
        <div className="colorList">
          {colors.map((color, index) => (
            <div
              key={index}
              className="colorSquare"
              style={{ backgroundColor: color }}
              onMouseOver={() => setBgColor(color)}
              onClick={() => {
                setSelectedColor(color);
                setShowColors(false);
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
