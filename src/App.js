
import './App.css';
import Maintable from "./Components/Main-table";
import AddToDatabase from "./Components/AddToDatabase";

function App() {
  return (
    <div className="Main-App">
      <div className="Main-Layout">
        <div className="Main-header"></div>
        <div className="Main-content">
          <div className="Main-content-inner">
          <Maintable/>
          </div>
        </div>
        <div className="Main-footer">
        <AddToDatabase/>
        </div>
    </div>
      </div>
  );
}

export default App;
