import './App.css';
import { Footer, Header, Main } from './components';

function App() {
  return (
    <section className='todoapp'>
      <Header />
      <Main />
      <Footer count={0} />
    </section>
  );
}

export default App;
