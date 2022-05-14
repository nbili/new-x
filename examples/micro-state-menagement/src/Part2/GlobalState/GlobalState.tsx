import { createContext, useContext } from "react";

function Component1() {
  const x = useContext(ColorContext);
  return <h1 style={{ color: x }}>Comp1</h1>;
}
function Component2() {
  const x = useContext(ColorContext);
  return <h1 style={{ color: x }}>Comp2</h1>;
}

function Child() {
  return (
    <div>
      Child
      <Component1 />
      <ColorContext.Provider value="pink">
        <Component2 />
      </ColorContext.Provider>
    </div>
  );
}

const ColorContext = createContext("blue");

function UseColor() {
  const color = useContext(ColorContext);

  return <strong style={{ color }}>strong</strong>;
}

function Parent() {
  return (
    <div>
      <UseColor />
      Parent
      <ColorContext.Provider value="red">
        <Child />
      </ColorContext.Provider>
    </div>
  );
}

export { Parent };
