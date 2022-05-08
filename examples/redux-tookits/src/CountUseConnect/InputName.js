import { memo, useState } from "react";
import { useStore } from "react-redux";
import { CountContainer } from "./CountContainer";

function Count({ count }) {
  console.log(`render ...`);
  return <h1>{count.count}</h1>;
}

function InputName({ name, inputName }) {
  const store = useStore();

  console.log(store.getState(), "<<<<");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => inputName(e.currentTarget.value)}
      />
      <div>InputName: {name}</div>
      <br />

      {/* <button onClick={() => setCount()}>+</button> */}

      <CountContainer />
    </div>
  );
}

export { InputName, Count };
