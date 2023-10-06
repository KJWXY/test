import './App.css';

function App() {
const test = 'TEST'
const number = 3

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{test} {number}</h1>
      </div>
    </div>
  );
}

export default App;