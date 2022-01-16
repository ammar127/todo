import './App.css';
import { Header, Main } from './components';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>todos</h1>
        <Header />
      </header>
      <Main />
    </div>
  );
}

export default App;
