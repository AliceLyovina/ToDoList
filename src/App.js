import './App.css';
import { ToDo } from './ToDo';
import imgBottom from './assets/green-bottom.png';

function App() {
  return (
    <div className="app">
      <div className="container header">
        <h1>TO DO LIST</h1>
      </div>
      <div className="container">
        <ToDo />
      </div>
      <div className="img-bottom">
        <img className="imgGreens" src={imgBottom} alt="greens" />
      </div>
    </div>
  );
}

export default App;