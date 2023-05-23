import './App.css';
import json from './example.json';
import JsonViewer from './JsonViewer';

function App() {
  return (
    <div className="App">
      <JsonViewer json={json} />
    </div>
  );
}

export default App;
