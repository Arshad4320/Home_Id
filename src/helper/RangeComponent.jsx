/* eslint-disable react/prop-types */

import { useState } from "react";
import { Range } from "react-range";

const RangeComponent = () => {
  const [values, setValues] = useState([50]);

  return (
    <Range
      step={0.1}
      min={0}
      max={1000}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "5px",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            backgroundColor: "#999",
            borderRadius: "100%",
            border: "none",
          }}
        >
          <p className="border-0"> {values[0]}</p>
        </div>
      )}
    />
  );
};

export default RangeComponent;
