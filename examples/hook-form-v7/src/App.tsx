import { useState } from "react";
import { Case } from "./Case";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Hook Form {count}
      <Case></Case>
    </div>
  );
}

export default App;
