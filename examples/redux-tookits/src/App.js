import "./App.css";
// import { Count } from "./Count";
import { Count } from "./CountUseConnect";
import { UserContainer } from "./CountUseConnect/UserContainer";

function App() {
  return (
    <div className="App" style={{ color: "red" }}>
      <UserContainer />
      <hr />
      <Count />
    </div>
  );
}

export default App;
