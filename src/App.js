import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import LogoInfo from './Layout/LogoInfo/LogoInfo';
import Menu from './Layout/Menu/menu';
// import Home from './features'
import { Route, Routes } from 'react-router-dom';
import Product from './features/Product';
import Shop from './features/Shop';
import Blog from './features/Blog';
import Contact from './features/Contact';
import Home from './features/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <LogoInfo />
      <Menu />
      {/* <Home /> */}
      <Routes>
        <Route path='/gifymo' element={<Home />} />
        <Route path='/gifymo/shop' element={<Shop />} />
        <Route path='/gifymo/blog' element={<Blog />} />
        <Route path='/gifymo/contact' element={<Contact />} />
        <Route path='/gifymo/product' element={<Product />} />
        {/* <Route path='/gifymo/ourstory' element={<OurStory />} /> */}
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;