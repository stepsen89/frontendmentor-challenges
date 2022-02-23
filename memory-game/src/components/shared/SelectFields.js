import React, { useState, useRef, createRef, useEffect } from "react";

function SelectField({ label, mode, options, setValue }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const itemElements = useRef([]);

  itemElements.current = options.map(
    (_, i) => itemElements.current[i] ?? createRef()
  );

  useEffect(() => {
    itemElements.current[0].current.classList.add("active");
    setValue(mode, options[0]);
  }, []);

  const selected = (e) => {
    itemElements.current.forEach((el) => {
      if (el.current.value === e.target.value) {
        el.current.classList.add("active");
      } else {
        el.current.classList.remove("active");
      }
      setSelectedOption(e.target.value);
      setValue(mode, e.target.value);
    });
  };

  return (
    <div className="select">
      <h2>{label}</h2>
      <div className="select-choices">
        {options.map((item, i) => (
          <button
            type="select"
            key={item}
            ref={itemElements.current[i]}
            className="selectable"
            onClick={selected}
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectField;
