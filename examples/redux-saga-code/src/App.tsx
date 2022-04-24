import { Header } from "./components/Header";
import "./App.css";
import { generator } from "./saga";

function App() {
  generator();
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
