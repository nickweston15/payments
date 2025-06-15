import './assets/App.css';
import ServerButton from './components/ServerButton.js';
import FileUpload from './components/FileUpload.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payments Playground</h1>
      </header>
      <main className="App-main">
        <section>
          <h2>Checkout Simulator</h2>
          <ServerButton />
        </section>
        <section>
          <h2>Not sure if I'll use this</h2>
          <FileUpload />
        </section>
      </main>
      <footer className="App-footer">
        <p>Built by Nick Weston, 2025 &reg;</p>
      </footer>
    </div>
  );
}

export default App;