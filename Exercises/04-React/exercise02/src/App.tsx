import "./App.css";
import ClockContent from "./components/organisms/ClockContent";
import CountContent from "./components/organisms/CountContent";

function App() {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <div className="flex justify-center h-screen flex-col">
        <CountContent />
      </div>
      <div className="flex justify-center h-screen flex-col">
        <ClockContent />
      </div>
    </div>
  );
}

export default App;
