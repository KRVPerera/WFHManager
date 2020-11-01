import logo from './logo.svg';
import './App.css';

function App() {

  fetch('http://localhost:9090/links/all')
  .then(rest => rest.json())
  .then(console.log)

  return (
    <div className="App">
      hello
    </div>
  );

}

export default App;
