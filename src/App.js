import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'green', 'blue', 'purple', 'orange'];
  const [bgColor, setBgColor] = useState('');

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <ColorPicker colors={colors} setBgColor={setBgColor} />
    </div>
  );
}

export default App;
