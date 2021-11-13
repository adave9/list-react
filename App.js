
import './App.css';
import Garage from './Garage';
import Garage2 from './Garage2';

function App() {
  return (
    <div className="App">
      <div className="app1">
        <h1>Ankur's Garge</h1>
          <Garage/>
          <p>*Above is a <strong>list</strong> demo.*</p>
      </div>
      <div className="app2">
        <h1>Ankur's Garge</h1>
          <Garage2/>
        <p>*Above is a <strong>keys</strong> demo.*</p>
      </div>
    </div>
  );
}

export default App;
