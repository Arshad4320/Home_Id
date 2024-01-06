import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
function RangeComponent() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="App">
      <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px" }}>onInput:</div>
        <div style={{ margin: "10px" }}>{minValue}</div>
        <div style={{ margin: "10px" }}>{maxValue}</div>
      </div>
    </div>
  );
}

export default RangeComponent;
