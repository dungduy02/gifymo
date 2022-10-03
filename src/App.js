import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import LogoInfo from './Layout/LogoInfo/LogoInfo';
import Menu from './Layout/Menu/menu';
import Home from './features/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <LogoInfo />
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
