import React, { useCallback, useState } from "react";
import "./styles.css";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    name: value,
    type: "text",
    onChange: e => {
      setValue(e.target.value);
    },
    onClick: e => {
      e.target.value === value && alert(11111111111111111);
    }
  };

  return [value, bind, setValue];
}

const useCheckboxHandler = initialState => {
  const [checked, setCheckbox] = useState(initialState);

  const handleEventChange = useCallback(() => {
    setCheckbox({
      checked: !checked
    });
  }, [checked]);

  const bind = {
    checked,
    onChange: e => {
      handleEventChange();
    }
  };

  return [bind];
};

export default function App() {
  const { bind } = useCheckboxHandler(null);
  const [name, bindName, setName] = useInput(null);
  const [test, bindTest] = useInput(null);
  return (
    <div className="App">
      <h1>
        Hello CodeSandbox {name} {test}
      </h1>
      <input
        {...bindName}
        onClick={e => {
          e.target.value === name && ((e.target.value = "") || setName(null));
        }}
      />
      <input {...bindTest} />
      <input type={"checkbox"} {...bind} />

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
