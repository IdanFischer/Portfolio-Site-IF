import Footer from './components/Footer';
import Grids from './components/Grids';
import Header from './components/Header';
import Trident from './components/Trident';
import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Trident />
        <Grids />
        <Footer />
      </header>
    </div>
  );
}

export default App;
